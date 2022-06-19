import { LeasingBaseUser } from 'src/leasing-base-user/entity/leasing-base-user.entity';

export interface JwtPayload {
  email: string;
  leasingBaseUser: LeasingBaseUser;
}
