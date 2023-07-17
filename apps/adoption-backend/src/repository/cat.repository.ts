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


export type CatInput = Omit<Cat, 'id'>;

export const validateCat = (data: any): CatInput => {
  if (!data?.name) {
    console.log(data);
    throw new Error('Name is required');
  }

  if (!data?.age) {
    throw new Error('Age is required');
  }

  if (!data?.breed) {
    throw new Error('Breed is required');
  }

  if (!data?.color) {
    throw new Error('Color is required');
  }

  if (!data?.gender) {
    throw new Error('Gender is required');
  }

  if (!data?.image) {
    throw new Error('Http of image is required');
  }

  if (!data?.description) {
    throw new Error('Description is required');
  }

  if (!data?.adoption_fee) {
    throw new Error('Adoption fee is required');
  }

  if (!data?.available) {
    data.available = true;
  }

  return data;
};
export class CatRepository {
  private cats: Cat[];

  constructor() {
    this.cats = JSON.parse(
      readFileSync(join(__filename, '..', 'data', 'data.json'), 'utf-8')
    ).cats;
}

  public async updateCat(catId: number, newProps: Cat): Promise<Cat> {
    let catToUpdate = this.cats.find((cat) => cat.id === catId)
    catToUpdate = {
      ...newProps,
      id: catId
    }
    return catToUpdate
  }

}
