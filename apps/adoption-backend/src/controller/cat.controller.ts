import { Request, Response } from 'express';
import { CatService } from '../service/cat.service';

type Cat = {
  id: number;
  name: string;
  age: number;
  breed: string;
  color: string;
  gender: string;
  image: string;
  description: string;
  adoption_fee: number;
  available: boolean;
};


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
 }

  public async getRecomCats(req: Request, res: Response): Promise<void> {
    const numberOfPupils = Number(req.params.numberOfPupils)
    const recomCats = await this.catService.getRecomCats(numberOfPupils);
    res.send(recomCats)
  }

  public async addNewCat(req: Request, res: Response): Promise<void> {
    const cat: Cat = Object(req)
    const newCat = await this.catService.addNewCat(cat);
    res.send(newCat)
  }

  public async deleteCat(req: Request, res: Response): Promise<void> {
    const id = Number(req)
    const deleteCat = await this.catService.deleteCat(id);
    res.send(deleteCat)
  }

  public async updateCat(req: Request, res: Response): Promise<void> {
    const id = Number(req)
    const newProps = Object(req)
    const updateCat = await this.catService.updateCat(id, newProps);
    res.send(updateCat)
  }

  // public async loginUser(req: Request, res: Response): Promise<void> {
  //   const email = req.email
  //   const password = req.password
  //   const logIn = await this.catService.loginUser(email, password)
  //   res.send(logIn)
  // }
}


