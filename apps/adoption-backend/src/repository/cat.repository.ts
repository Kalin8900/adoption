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

export type RecommendedCat = {
  id: number;
  name: string;
  image: string;
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
    return this.cats.find((cat) => cat.id === id) || null;
  }

  public async getRecomCats(numberOfPupils: number): Promise<RecommendedCat[]> {
    const pupils = this.cats.map((cat) => ({
      id: cat.id,
      name: cat.name,
      image: cat.image,
    }));
    return pupils.slice(0, numberOfPupils);
  }
  public async addNewCat(cat: Cat): Promise<Cat> {
    this.cats.push(cat);
    return this.cats[this.cats.length - 1];
  }

  public async deleteCat(id: number): Promise<void> {
    const catToDelete = this.cats.find((cat) => cat.id === id);
    const index = this.cats.indexOf(catToDelete);
    this.cats.splice(index, 1);
  }
}
