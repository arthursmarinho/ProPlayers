import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProPlayer, ProPlayerSchema } from './schemas/proplayer.schema'; // Certifique-se de exportar a classe ProPlayer no schema
import { ProPlayerService } from './proplayers.service'; // Certifique-se de ter um service
import { ProPlayerController } from './proplayers.controller'; // Certifique-se de ter um controller

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProPlayer.name, schema: ProPlayerSchema },
    ]), // Usando ProPlayer.name em vez de 'ProPlayer'
  ],
  controllers: [ProPlayerController], // Adicionando o controller
  providers: [ProPlayerService], // Adicionando o service
})
export class ProplayersModule {}
