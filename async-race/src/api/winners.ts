import appData from '../data/appData';
import { WINNERS_ON_PAGE, WINNERS_PATH } from '../data/constants';
import { getWinnersData } from '../functions/functions';
import { SortOrder, WinnersSort } from '../interfaces/enum';
import { ResponseWinnersObject } from '../interfaces/interfaces';

export const getWinners = async (
  page: number = appData.winnersPage,
  limit: number = WINNERS_ON_PAGE,
  sort: string = WinnersSort.id,
  order: string = SortOrder.asc
): Promise<void> => {
  const response = await fetch(`${WINNERS_PATH}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  const data: Array<ResponseWinnersObject> = await response.json();
  const winnersCount = Number(response.headers.get('x-total-count'));
  getWinnersData(winnersCount, data);
};

export const getWinner = async (id: number): Promise<ResponseWinnersObject> => {
  const response = await fetch(`${WINNERS_PATH}/${id}`);
  const result = await response.json();
  return result;
};

export const createWinner = async (data: ResponseWinnersObject): Promise<ResponseWinnersObject> => {
  const response = await fetch(`${WINNERS_PATH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  return result;
};
