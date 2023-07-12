import { Request, Response } from 'express';
import { WelcomeService } from '../service/welcome.service';

export class WelcomeController {
  private readonly welcomeService: WelcomeService;

  constructor() {
    this.welcomeService = new WelcomeService();
  }

  public async getWelcomeMessage(req: Request, res: Response) {
    const message = await this.welcomeService.getWelcomeMessage();

    res.send(message);
  }
}
