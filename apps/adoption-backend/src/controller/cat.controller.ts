import { Request, Response } from 'express';
import { CatService } from '../service/cat.service';
import { Cat } from '../repository/cat.repository';
export class CatController {
  private readonly catService: CatService;

  constructor() {
    this.catService = new CatService();
  }
  public async updateCat(req: Request<any, void, Cat>, res: Response): Promise<void> {
    const catId = Number(req.params.catId)
    const newProps = req.body
    const updateCat = await this.catService.updateCat(catId, newProps);
    res.status(200).send(updateCat);
  }
}


