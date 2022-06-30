import { LeasingUserInfo } from 'src/user-info/entity/leasing-user-info.entity';
import { User } from 'src/user/entity/user.entity';
import { UserState } from 'src/utils/types';
import { ChildEntity, Column, JoinColumn, OneToOne } from 'typeorm';

@ChildEntity()
export class Client extends LeasingUserInfo {
  @Column({ name: 'username', type: 'varchar' })
  userName: string;

  @Column()
  inn: string;

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
