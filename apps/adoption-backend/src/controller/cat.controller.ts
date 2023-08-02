import { Request, Response } from 'express';
import { CatService } from '../service/cat.service';

export class CatController {
  private readonly catService: CatService;

  constructor() {
    this.catService = new CatService();
  }
  
  public async getRecomCats(req: Request, res: Response): Promise<void> {
    const numberOfRecomCats = Number(req.params.numberOfRecomCats)
    const recomCats = await this.catService.getRecomCats(numberOfRecomCats);
    res.send(recomCats)
  }
}
