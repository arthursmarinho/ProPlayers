import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teams } from './schemas/teamschema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Teams.name) private teamsModel: Model<Teams>) {}

  async findAll(): Promise<Teams[]> {
    return this.teamsModel.find().exec(); // Pega todos os jogadores
  }

  async findOne(id: string): Promise<Teams | null> {
    return this.teamsModel.findById(id).exec();
  }
}
