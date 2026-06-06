import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FailController } from './fail.controller';
import { FailService } from './fail.service';
import { Fail } from './entities/fail.entity';

describe('FailController', () => {
  let controller: FailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FailController],
      providers: [
        FailService,
        {
          provide: getRepositoryToken(Fail),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FailController>(FailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
