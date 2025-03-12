import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Teams, TeamsSchema } from './schemas/teamschema'; // Certifique-se de exportar a classe ProPlayer no schema
import { TeamsService } from './teams.service'; // Certifique-se de ter um service
import { TeamsController } from './teams.controller'; // Certifique-se de ter um controller

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teams.name, schema: TeamsSchema }]), // Usando ProPlayer.name em vez de 'ProPlayer'
  ],
  controllers: [TeamsController], // Adicionando o controller
  providers: [TeamsService], // Adicionando o service
})
export class TeamsModule {}
