import { RaceData } from '../interfaces/interfaces';
import { DEFAULT_PAGE } from './constants';

const raceData: RaceData = {
  carsInGarageCount: 0,
  currentPage: DEFAULT_PAGE,
  countOfPages: 1,
  updateCarId: 0,
  carsData: []
};
export default raceData;