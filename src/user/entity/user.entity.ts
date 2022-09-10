import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../role/entity/role.entity';
import { Exclude } from 'class-transformer';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ nullable: true, select: false })
  resetPasswordId: string;

  @Column({ default: false, select: false })
  isEmailConfirmed: boolean;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  salt: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;

  @ManyToOne((type) => Role, (role) => role.id, {
    eager: true,
  })
  // TODO: Change to roleId
  @JoinColumn({ name: 'role_id' })
  role: Role;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
