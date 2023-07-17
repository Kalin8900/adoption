import { CatRepository } from '../repository/cat.repository';
import { Cat } from '../repository/cat.repository'

export class CatService {
  private readonly catRepository: CatRepository;

  constructor() {
    this.catRepository = new CatRepository();
  }

  public async updateCat(catId: number, newProps: Cat): Promise<Cat> {
    return this.catRepository.updateCat(catId, newProps)
  }

}
