import { LeasingBaseUser } from 'src/leasing-base-user/entity/leasing-base-user.entity';
import { UserState } from 'src/utils/types';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Client extends LeasingBaseUser {
  @Column({ name: 'username', type: 'varchar' })
  userName: string;

  @Column({ type: 'int' })
  inn: number;

  @Column({
    type: 'enum',
    enum: UserState,
    default: UserState.UNREG,
  })
  state: UserState;

  @Column({ type: 'boolean', default: false })
  blocked: boolean;

  @Column({ type: 'boolean', default: false })
  invited: boolean;

  @Column({ nullable: true })
  description: string;
}
