import { readFileSync } from 'fs';
import { join } from 'path';

export type Cat = {
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

export class CatRepository {
  private readonly cats: Cat[];

  constructor() {
    this.cats = JSON.parse(
      readFileSync(join(__filename, '..', 'data', 'data.json'), 'utf-8')
    ).cats;
  }

  public async getAllCats(): Promise<Cat[]> {
    return this.cats;
  }

  public async getCatById(id: number): Promise<Cat> {
    console.log(this.cats)
    return this.cats.find((cat) => cat.id === id) || null;
  }

}

// diodac reszre end pointów
// dodanie kota

// usuniecie kota

// akltualizacja kota

// jak zorbic abby na biezaca nsie aktulizaowal data.json