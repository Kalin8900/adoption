import {
  Cat,
  CatRepository,
} from '../repository/cat.repository';

export class CatService {
  private readonly catRepository: CatRepository;

  constructor() {
    this.catRepository = new CatRepository();
  }
  public async addNewCat(cat: Cat): Promise<Cat> {
    return this.catRepository.addNewCat(cat);
  }

  public async deleteCat(id: number): Promise<void> {
    return this.catRepository.deleteCat(id);
  }
}
