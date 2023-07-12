import { WelcomeRepository } from '../repository/welcome.repository';

export class WelcomeService {
  private readonly welcomeRepository: WelcomeRepository;

  constructor() {
    this.welcomeRepository = new WelcomeRepository();
  }

  public async getWelcomeMessage(): Promise<{ message: string }> {
    const message = await this.welcomeRepository.getWelcomeMessage();

    return { message };
  }
}
