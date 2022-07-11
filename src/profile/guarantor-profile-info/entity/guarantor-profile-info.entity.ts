import { ProfileInfo } from 'src/profile/profile-info/entity/profile-info.entity';
import { ChildEntity } from 'typeorm';

@ChildEntity()
export class GuarantorProfileInfo extends ProfileInfo {}
