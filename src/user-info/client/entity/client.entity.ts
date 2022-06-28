import { LeasingUserInfo } from 'src/user-info/entity/leasing-user-info.entity';
import { UserState } from 'src/utils/types';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class Client extends LeasingUserInfo {
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
