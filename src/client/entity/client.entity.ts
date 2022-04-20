import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, CreateDateColumn, Entity } from 'typeorm';

export enum UserState {
  UNREG = 'UNREG',
  REG = 'REG',
}

@Entity()
export class Client extends LeasingBaseEntity {
  @Column({ name: 'username', type: 'varchar' })
  userName: string;

  @Column({ type: 'int' })
  inn: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: UserState,
    default: UserState.UNREG,
  })
  state: UserState;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;

  @Column({ type: 'boolean', default: false })
  blocked: boolean;

  @Column({ type: 'boolean', default: false })
  invited: boolean;

  @Column({ nullable: true })
  description: string;
}
