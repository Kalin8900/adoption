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
    data.image =
      'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg';
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

  public async addNewCat(catInput: CatInput): Promise<Cat> {
    const cat: Cat = {
      ...catInput,
      id: this.cats.length + 1,
    };

    this.cats.push(cat);
    return cat;
  }


    public async deleteCat(id: number): Promise<void> {
      const catToDelete = this.cats.find((cat) => cat.id === id);
      const index = this.cats.indexOf(catToDelete);
      this.cats.splice(index, 1);
    
  }
}
