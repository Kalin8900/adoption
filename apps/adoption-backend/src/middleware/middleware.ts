import { NextFunction, Request, Response } from 'express';

export class ValidationMiddleware {
  public getMiddleware<T>(validate: (data: any) => T) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        validate(req.body);
      } catch (error) {
        if (error instanceof Error){
          res.status(400).send(error?.message)
        }
        return;
      }

      next();
    };
  }
}