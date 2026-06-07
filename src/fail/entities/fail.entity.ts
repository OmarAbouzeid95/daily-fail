import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Reaction } from '../../reaction/entities/reaction.entity';

@Entity()
export class Fail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Generated('uuid')
  uuid!: string;

  @Column()
  user_id!: number;

  @ManyToOne(() => User, (user: User) => user.fails)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column('text')
  content!: string;

  @OneToMany(() => Reaction, (reaction: Reaction) => reaction.fail)
  reactions!: Reaction[];
}
