// import { Cat, PupilProps } from '../data/types';
import { CatRepository } from '../repository/cat.repository';


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


export type PupilProps = {
  id: number;
  name: string;
  image: string;
}


export class CatService {
  private readonly catRepository: CatRepository;

  constructor() {
    this.catRepository = new CatRepository();
  }

  public async getAllCats(): Promise<Cat[]> {
    return this.catRepository.getAllCats();
  }

  public async getCatById(id: number): Promise<Cat> {
    return this.catRepository.getCatById(id)
  }

  public async getRecomCats(numberOfPupils: number): Promise<PupilProps[]> {
    return this.catRepository.getRecomCats(numberOfPupils)
  }
}
