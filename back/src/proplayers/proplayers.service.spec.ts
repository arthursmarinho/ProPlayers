import { Test, TestingModule } from '@nestjs/testing';
import { ProplayersService } from './proplayers.service';

describe('ProplayersService', () => {
  let service: ProplayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProplayersService],
    }).compile();

    service = module.get<ProplayersService>(ProplayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
