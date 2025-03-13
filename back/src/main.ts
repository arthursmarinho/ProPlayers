import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS para todas as origens
  app.enableCors({
    origin: '*', // Permitir todas as origens durante o desenvolvimento
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}

bootstrap();
