import { EntityRepository, Repository } from 'typeorm';
import { LeasingBaseUser } from '../entity/leasing-base-user.entity';

@EntityRepository(LeasingBaseUser)
export class LeasingBaseUserRepository extends Repository<LeasingBaseUser> {}
