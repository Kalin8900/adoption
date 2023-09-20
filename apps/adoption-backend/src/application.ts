import express from 'express';
import { Server } from 'http';
import * as path from 'path';
import { WelcomeController } from './controller/welcome.controller';
import { CatController } from './controller/cat.controller';
import { ValidationMiddleware } from './middleware/middleware';
import { validateCat } from './repository/cat.repository';
export class Application {
  private readonly welcomeController: WelcomeController;
  private readonly catController: CatController;
  private readonly validationMiddleware: ValidationMiddleware;

  private constructor(
    private readonly app: express.Express,
    private readonly server: Server
  ) {
    this.validationMiddleware = new ValidationMiddleware();
    this.welcomeController = new WelcomeController();
    this.app.get('/api', (req, res) =>
      this.welcomeController.getWelcomeMessage(req, res)
    );
    
    this.catController = new CatController();
    
    this.app.put(
      '/api/cats/:catId',
      (req, res, next) =>
        this.validationMiddleware.getMiddleware(validateCat)(req, res, next),
      (req, res) => {
        this.catController.updateCat(req, res);
      }
    );
}

  public static async start(): Promise<Application> {
    const app = express();
    app.use(express.json());

    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    const port = process.env.PORT || 3333;
    const server = app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/api`);
    });
    server.on('error', console.error);

    return new Application(app, server);
  }
}
