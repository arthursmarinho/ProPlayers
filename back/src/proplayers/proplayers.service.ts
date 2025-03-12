import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProPlayer } from './schemas/proplayer.schema';

@Injectable()
export class ProPlayerService {
  constructor(
    @InjectModel(ProPlayer.name) private proPlayerModel: Model<ProPlayer>,
  ) {}

  async findAll(): Promise<ProPlayer[]> {
    return this.proPlayerModel.find().exec(); // Pega todos os jogadores
  }

  // Modificação para tipar o retorno corretamente
  async findOne(id: string): Promise<ProPlayer | null> {
    // Certifique-se de que o ID é válido
    return this.proPlayerModel.findById(id).exec();
  }
}
