import { CatRepository } from '../repository/cat.repository';
import { RecomCats } from '../repository/cat.repository'
export class CatService {
  private readonly catRepository: CatRepository;

  constructor() {
    this.catRepository = new CatRepository();
  }

  public async getRecomCats(numberOfPupils: number): Promise<RecomCats[]> {
    return this.catRepository.getRecomCats(numberOfPupils)
  }
}
