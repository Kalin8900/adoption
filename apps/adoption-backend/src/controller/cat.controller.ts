import { Request, Response } from 'express';
import { CatService } from '../service/cat.service';

export class CatController {
  private readonly catService: CatService;

  constructor() {
    this.catService = new CatService();
  }

  public async getAllCats(req: Request, res: Response): Promise<void> {
    const allCats = await this.catService.getAllCats();

    res.send(allCats);
  }
}
