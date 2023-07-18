// import { Cat, PupilProps } from '../data/types';
import { CatRepository } from '../repository/cat.repository';


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


type PupilProps = {
  id: number;
  name: string;
  image: string;
}

type Users = {
  id: number;
  email: string;
  password: string;
  name: string;
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

  public async addNewCat(cat: Cat): Promise<Cat> {
    return this.catRepository.addNewCat(cat)
  }

  public async deleteCat(id: number): Promise<Cat[]> {
    return this.catRepository.deleteCat(id)
  }

  public async updateCat(id: number, newProps: Cat): Promise<Cat> {
    return this.catRepository.updateCat(id, newProps)
  }


//   public async loginUser(email: string, password: string): Promise<void> {
//     return this.catRepository.loginUser(email, password)
// }

}
