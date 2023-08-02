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

export type RecomCats = {
  id: number;
  name: string;
  image: string;
}

export class CatRepository {
  private readonly cats: Cat[];
  private readonly recomCats: RecomCats[]

  constructor() {
    this.cats = JSON.parse(
      readFileSync(join(__filename, '..', 'data', 'data.json'), 'utf-8')
    ).cats;
  }

  public async getRecomCats(numberOfRecomCats: number): Promise<RecomCats[]> {
    const recomCats = this.cats.map((cat) => ({
      id: cat.id,
      name: cat.name,
      image: cat.image
    }))
    return recomCats.slice(0, numberOfRecomCats);
  }

}
