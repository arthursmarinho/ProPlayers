import { Test, TestingModule } from '@nestjs/testing';
import { ProPlayerController } from './proplayers.controller';
import { ProPlayerService } from './proplayers.service';

describe('ProplayersController', () => {
  let controller: ProPlayerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProPlayerController],
      providers: [ProPlayerService],
    }).compile();

    controller = module.get<ProPlayerController>(ProPlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
