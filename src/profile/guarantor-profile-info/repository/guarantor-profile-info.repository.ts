import { EntityRepository, Repository } from 'typeorm';
import { GuarantorProfileInfo } from '../entity/guarantor-profile-info.entity';

@EntityRepository(GuarantorProfileInfo)
export class GuarantorProfileInfoRepository extends Repository<GuarantorProfileInfo> {}
