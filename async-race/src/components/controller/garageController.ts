import * as engineRequest from '../../api/engine';
import * as garageRequest from '../../api/garage';
import { BASE_CAR_SPEED, CARS_ON_PAGE, RANDOM_CARS_COUNT } from '../../data/constants';
import raceData from '../../data/raceData';
import { startCarAnimation, stopCarAnimation } from '../../functions/carAnimations';
import { createRandomCar, getCarsOnPageId, getElement } from '../../functions/functions';
import Garage from '../view/garage';

class GarageController {
  private garageView: Garage;

  constructor() {
    this.garageView = new Garage();
  }

  public async deleteCarFromGarage(carId: number, targetCarItem: Element): Promise<void> {
    await garageRequest.deleteCar(carId);
    await garageRequest.getCars(raceData.currentPage, CARS_ON_PAGE);
    targetCarItem.remove();
    this.garageView.drawGarage();
  }

  public async startCar(id: number): Promise<void> {
    const { velocity } = await engineRequest.startEngine(id);
    startCarAnimation(id, velocity * BASE_CAR_SPEED);
    try {
      await engineRequest.switchToDriveMode(id);
    } catch (error) {
      stopCarAnimation(id, true);
    }
  }

  public async stopCar(id: number): Promise<void> {
    await engineRequest.stopEngine(id);
    stopCarAnimation(id);
  }

  public async generateCars() {
    for (let i = 0; i < RANDOM_CARS_COUNT; i += 1) {
      garageRequest.postCar(createRandomCar());
    }
  }

  public startRace(): void {
    const carsOnPageId = getCarsOnPageId();
    carsOnPageId.forEach((id) => {
      this.startCar(id);
    });
  }

  public resetRace(): void {
    const carsOnPageId = getCarsOnPageId();
    carsOnPageId.forEach((id) => {
      this.stopCar(id);
    });
  }

  public async showPrevPage(): Promise<void> {
    if (raceData.currentPage > 1) raceData.currentPage -= 1;
    await garageRequest.getCars(raceData.currentPage, CARS_ON_PAGE);
    this.garageView.drawGarage();
  }

  public async showNextPage(): Promise<void> {
    if (raceData.currentPage < raceData.countOfPages) raceData.currentPage += 1;
    await garageRequest.getCars(raceData.currentPage, CARS_ON_PAGE);
    this.garageView.drawGarage();
  }

  public async createCar(): Promise<void> {
    const inputCarName: HTMLInputElement = getElement('.input__create.input__text');
    const inputColor: HTMLInputElement = getElement('.input__create.input__color');
    const newCar = {
      name: inputCarName.value,
      color: inputColor.value
    };
    await garageRequest.postCar(newCar);
    await garageRequest.getCars(raceData.currentPage, CARS_ON_PAGE);
    this.garageView.drawGarage();
  }

  public selectCar(carId: number): void {
    const inputCarName: HTMLInputElement = getElement('.input__update.input__text');
    const inputColor: HTMLInputElement = getElement('.input__update.input__color');
    const [{ name, color }] = raceData.carsData.filter((car) => {
      return car.id === carId;
    });
    inputCarName.value = name;
    inputColor.value = color;
    raceData.updateCarId = carId;
  }

  public updateCar() {
    const inputCarName: HTMLInputElement = getElement('.input__update.input__text');
    const inputColor: HTMLInputElement = getElement('.input__update.input__color');
    //! Достать carID из raceData и добавить в api update запрос
  }
}

export default GarageController;