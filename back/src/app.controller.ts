import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('mensagem')
  getHello(): string {
    return 'Salve do backend NestJS!';
  }
}
