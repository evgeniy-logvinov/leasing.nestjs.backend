import { EntityRepository, Repository } from 'typeorm';
import { LeasingUserInfo } from '../entity/leasing-user-info.entity';

@EntityRepository(LeasingUserInfo)
export class LeasingUserInfoRepository extends Repository<LeasingUserInfo> {}
