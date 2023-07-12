import express from 'express';
import { Server } from 'http';
import * as path from 'path';
import { WelcomeController } from './controller/welcome.controller';
import { CatController } from './controller/cat.controller';

export class Application {
  private readonly WelcomeController: WelcomeController;
  private readonly CatController: CatController;

  private constructor(
    private readonly app: express.Express,
    private readonly server: Server
  ) {
    this.WelcomeController = new WelcomeController();
    this.app.get('/api', (req, res) =>
      this.WelcomeController.getWelcomeMessage(req, res)
    );
    this.CatController = new CatController();
    this.app.get('/api/cats', (req, res) =>
      this.CatController.getAllCats(req, res)
    );
  }

  public static async start(): Promise<Application> {
    const app = express();

    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    const port = process.env.PORT || 3333;
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);

    return new Application(app, server);
  }
}
