import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Todo } from '../../todo/entity/todo.entity';
import { UserInfo } from '../../user/entity/user-info.entity';
import { LeasingBaseUser } from 'src/user/entity/leasing-base-user.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column()
  salt: string;

  @OneToOne((type) => LeasingBaseUser, { eager: true })
  @JoinColumn()
  leasingBaseUser: LeasingBaseUser;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
