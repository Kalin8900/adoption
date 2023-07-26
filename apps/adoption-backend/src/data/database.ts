import { readFileSync } from 'fs';

export class Database {
  constructor(private readonly fileName: string) {}

  public read(): any {
    return JSON.parse(readFileSync(this.fileName, 'utf-8'));
  }

  public async write(data: any): Promise<void> {
    throw new Error('Not implemented');
  }
}
