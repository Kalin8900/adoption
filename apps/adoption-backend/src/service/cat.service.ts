import { Cat, CatRepository } from '../repository/cat.repository';

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
}
