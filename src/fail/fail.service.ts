import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFailDto } from './dto/create-fail.dto';
import { UpdateFailDto } from './dto/update-fail.dto';
import { Fail } from './entities/fail.entity';

@Injectable()
export class FailService {
  constructor(
    @InjectRepository(Fail)
    private readonly failRepository: Repository<Fail>,
  ) {}

  create(createFailDto: CreateFailDto) {
    const fail = this.failRepository.create(createFailDto);
    return this.failRepository.save(fail);
  }

  findAll() {
    return this.failRepository.find();
  }

  async findOne(id: number) {
    const fail = await this.failRepository.findOne({ where: { id } });
    if (!fail) {
      throw new NotFoundException(`Fail #${id} not found`);
    }
    return fail;
  }

  async update(id: number, updateFailDto: UpdateFailDto) {
    const fail = await this.findOne(id);
    Object.assign(fail, updateFailDto);
    return this.failRepository.save(fail);
  }

  async remove(id: number) {
    const fail = await this.findOne(id);
    return this.failRepository.remove(fail);
  }
}
