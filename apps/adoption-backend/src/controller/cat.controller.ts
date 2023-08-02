import { Request, Response } from 'express';
import { CatService } from '../service/cat.service';

export class CatController {
  private readonly catService: CatService;

  constructor() {
    this.catService = new CatService();
  }
  
  public async getRecomCats(req: Request, res: Response): Promise<void> {
    const numberOfPupils = Number(req.params.numberOfPupils)
    const recomCats = await this.catService.getRecomCats(numberOfPupils);
    res.send(recomCats)
  }
}
