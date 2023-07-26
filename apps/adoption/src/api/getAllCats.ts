import axios from 'axios';
import { Cat } from './getCatById';

export const getAllCats = async (): Promise<Cat[]> => {
  return axios
    .get<Cat[]>('http://localhost:3333/api/cats')
    .then((res) => res.data);
};
