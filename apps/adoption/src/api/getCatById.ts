import { cats } from './data.json';

export interface Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
  color: string;
  gender: string;
  image: string;
  description: string;
  adoption_fee: number;
  available: boolean;
}

export const getCatById = (id: number): Cat | null => {
  return cats.find((cat) => cat.id === id) || null;
};
