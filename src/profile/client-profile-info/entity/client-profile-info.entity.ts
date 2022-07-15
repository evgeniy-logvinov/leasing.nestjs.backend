import { GuarantorProfileInfo } from 'src/profile/guarantor-profile-info/entity/guarantor-profile-info.entity';
import { ProfileInfo } from 'src/profile/profile-info/entity/profile-info.entity';
import { Client } from 'src/user-info/client/entity/client.entity';
import { GuarantorTypeEnum } from 'src/utils/entities/GuarantorTypeEnum';
import { ChildEntity, Column, JoinColumn, OneToOne } from 'typeorm';

@ChildEntity()
export class ClientProfileInfo extends ProfileInfo {
  @Column({
    type: 'enum',
    enum: GuarantorTypeEnum,
  })
  type: GuarantorTypeEnum;

  @OneToOne(() => GuarantorProfileInfo, { eager: true })
  @JoinColumn()
  guarantor: GuarantorProfileInfo;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;
}
