import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fail } from '../../fail/entities/fail.entity';
import { Reaction } from '../../reaction/entities/reaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  token!: string;

  @OneToMany(() => Fail, (fail: Fail) => fail.user)
  fails!: Fail[];

  @OneToMany(() => Reaction, (reaction: Reaction) => reaction.user)
  reactions!: Reaction[];
}
