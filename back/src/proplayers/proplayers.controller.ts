import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProPlayerService } from './proplayers.service';
import { ProPlayer } from './schemas/proplayer.schema';

@Controller('proplayers')
export class ProPlayerController {
  constructor(private readonly proPlayerService: ProPlayerService) {}

  @Get()
  async findAll(): Promise<ProPlayer[]> {
    return this.proPlayerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProPlayer> {
    const player = await this.proPlayerService.findOne(id);

    if (!player) {
      throw new NotFoundException(`Jogador com o ID ${id} não encontrado`);
    }

    return player;
  }
}
