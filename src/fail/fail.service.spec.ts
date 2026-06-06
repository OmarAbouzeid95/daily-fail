import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FailService } from './fail.service';
import { Fail } from './entities/fail.entity';

describe('FailService', () => {
  let service: FailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FailService,
        {
          provide: getRepositoryToken(Fail),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FailService>(FailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
