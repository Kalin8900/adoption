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

  public async getCatById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id)
    const cat = await this.catService.getCatById(id);
    res.send({cat})
 }}
