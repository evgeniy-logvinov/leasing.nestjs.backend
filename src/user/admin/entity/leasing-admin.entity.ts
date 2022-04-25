import { LeasingBaseUser } from 'src/user/entity/leasing-base-user.entity';
import { ChildEntity, Column } from 'typeorm';

@ChildEntity()
export class LeasingAdmin extends LeasingBaseUser {
  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
