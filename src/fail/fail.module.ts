import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FailService } from './fail.service';
import { FailController } from './fail.controller';
import { Fail } from './entities/fail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fail])],
  controllers: [FailController],
  providers: [FailService],
})
export class FailModule {}
