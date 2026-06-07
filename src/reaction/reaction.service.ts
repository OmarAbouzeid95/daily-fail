import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { UpdateReactionDto } from './dto/update-reaction.dto';
import { Reaction } from './entities/reaction.entity';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private readonly reactionRepository: Repository<Reaction>,
  ) {}

  create(createReactionDto: CreateReactionDto) {
    const reaction = this.reactionRepository.create(createReactionDto);
    return this.reactionRepository.save(reaction);
  }

  findAll() {
    return this.reactionRepository.find();
  }

  async findOne(id: number) {
    const reaction = await this.reactionRepository.findOne({ where: { id } });
    if (!reaction) {
      throw new NotFoundException(`Reaction #${id} not found`);
    }
    return reaction;
  }

  async update(id: number, updateReactionDto: UpdateReactionDto) {
    const reaction = await this.findOne(id);
    Object.assign(reaction, updateReactionDto);
    return this.reactionRepository.save(reaction);
  }

  async remove(id: number) {
    const reaction = await this.findOne(id);
    return this.reactionRepository.remove(reaction);
  }
}
