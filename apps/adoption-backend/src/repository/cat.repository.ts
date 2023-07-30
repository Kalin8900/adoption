import { readFileSync } from 'fs';
import { join } from 'path';
// import { Cat, PupilProps } from '../data/types'


type Cat = {
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
};

export type RecommendedCat = {
  id: number;
  name: string;
  image: string;
};

export class CatRepository {
  private cats: Cat[];
  private readonly users: Users[]

  constructor() {
    this.cats = JSON.parse(
      readFileSync(join(__filename, '..', 'data', 'data.json'), 'utf-8')
    ).cats;
  }

  public async getAllCats(): Promise<Cat[]> {
    return this.cats;
  }
}


