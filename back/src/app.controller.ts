import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('mensagem')
  getMensagem(): string {
    return 'Salve do backend NestJS!';
  }
}
