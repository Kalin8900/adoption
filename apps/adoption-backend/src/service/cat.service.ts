import {
  Cat,
  CatRepository,
  RecommendedCat,
} from '../repository/cat.repository';

export class CatService {
  private readonly catRepository: CatRepository;

  constructor() {
    this.catRepository = new CatRepository();
  }

  public async getAllCats(): Promise<Cat[]> {
    return this.catRepository.getAllCats();
  }

  public async getCatById(id: number): Promise<Cat> {
    return this.catRepository.getCatById(id);
  }

  public async getRecomCats(numberOfPupils: number): Promise<RecommendedCat[]> {
    return this.catRepository.getRecomCats(numberOfPupils);
  }

  public async addNewCat(cat: Cat): Promise<Cat> {
    return this.catRepository.addNewCat(cat);
  }

  public async deleteCat(id: number): Promise<void> {
    return this.catRepository.deleteCat(id);
  }
}
