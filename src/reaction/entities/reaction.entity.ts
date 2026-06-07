import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Fail } from '../../fail/entities/fail.entity';

@Entity()
export class Reaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  uuid!: string;

  @Column()
  user_id!: number;

  @ManyToOne(() => User, (user: User) => user.reactions)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column()
  fail_id!: number;

  @ManyToOne(() => Fail, (fail: Fail) => fail.reactions)
  @JoinColumn({ name: 'fail_id' })
  fail!: Fail;

  // Stores a single emoji; TEXT in SQLite holds UTF-8 natively.
  @Column('text')
  type!: string;
}
