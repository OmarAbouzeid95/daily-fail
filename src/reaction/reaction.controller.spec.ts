import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReactionController } from './reaction.controller';
import { ReactionService } from './reaction.service';
import { Reaction } from './entities/reaction.entity';

describe('ReactionController', () => {
  let controller: ReactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReactionController],
      providers: [
        ReactionService,
        {
          provide: getRepositoryToken(Reaction),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ReactionController>(ReactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
