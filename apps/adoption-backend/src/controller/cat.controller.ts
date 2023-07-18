import { Request, Response } from 'express';
import { CatService } from '../service/cat.service';
import { Cat } from '../repository/cat.repository';

export class CatController {
  private readonly catService: CatService;

  constructor() {
    this.catService = new CatService();
  }
  public async addNewCat(
    req: Request<any, void, Cat>,
    res: Response
  ): Promise<void> {
    const cat = req.body;
    const newCat = await this.catService.addNewCat(cat);
    res.status(201).send(newCat);
  }

  public async deleteCat(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const deleteCat = await this.catService.deleteCat(id);
    res.send(deleteCat);
  }
}
