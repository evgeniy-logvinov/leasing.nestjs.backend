import { LeasingBaseUser } from 'src/user/entity/leasing-base-user.entity';
import { UserInfo } from '../../user/entity/user-info.entity';

export interface JwtPayload {
  email: string;
  userInfo: UserInfo;
  leasingBaseUser: LeasingBaseUser;
}
