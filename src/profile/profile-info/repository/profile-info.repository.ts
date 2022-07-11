import { EntityRepository, Repository } from 'typeorm';
import { ProfileInfo } from '../entity/profile-info.entity';

@EntityRepository(ProfileInfo)
export class ProfileInfoRepository extends Repository<ProfileInfo> {}
