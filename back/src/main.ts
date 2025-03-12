import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS para todas as origens
  app.enableCors({
    origin: 'http://localhost:3001', // Substitua pelo seu frontend
  });

  await app.listen(3000);
}

bootstrap();
