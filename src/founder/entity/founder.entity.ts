import { FounderTypeEnum, LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

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
}
