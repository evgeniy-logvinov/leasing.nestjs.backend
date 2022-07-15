import { ProfileInfo } from 'src/profile/profile-info/entity/profile-info.entity';
import { FounderTypeEnum, LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Founder extends LeasingBaseEntity {
  @Column({
    type: 'enum',
    enum: FounderTypeEnum,
    default: FounderTypeEnum.PHYSICAL,
  })
  type: FounderTypeEnum;

  @Column()
  inn: string;

  @Column()
  name: string;

  @Column()
  businessShare: number;

  @ManyToOne(() => ProfileInfo, (profile) => profile.founders)
  profileInfo: ProfileInfo;
}
