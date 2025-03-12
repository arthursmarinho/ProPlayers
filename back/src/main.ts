import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS para todas as origens
  app.enableCors({
    origin: 'https://proplayers.onrender.com/',
  });

  await app.listen(3000);
}

bootstrap();
