import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('home')
  getMensagem() {
    return 'Olá, Mundo!';
  }
}
