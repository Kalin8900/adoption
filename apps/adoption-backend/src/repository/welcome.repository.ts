import { readFile } from 'fs/promises';
import { join } from 'path';

export class WelcomeRepository {
  public async getWelcomeMessage(): Promise<string> {
    const message = await readFile(
      join(__filename, '..', 'data', 'welcome-message.txt'),
      'utf-8'
    );

    return message;
  }
}
