import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fail } from '../../fail/entities/fail.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  token!: string;

  @OneToMany(() => Fail, (fail: Fail) => fail.user)
  fails!: Fail[];
}
