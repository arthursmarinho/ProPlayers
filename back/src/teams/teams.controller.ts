import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Teams } from './schemas/teamschema';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async findAll(): Promise<Teams[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Teams> {
    const team = await this.teamsService.findOne(id);

    if (!team) {
      throw new NotFoundException(`Jogador com o ID ${id} não encontrado`);
    }

    return team;
  }
}
