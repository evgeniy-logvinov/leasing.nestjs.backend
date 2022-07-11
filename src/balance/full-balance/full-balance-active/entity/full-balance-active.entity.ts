import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';
import { FullBalanceCurrentAssets } from '../../full-balance-current-assets/entity/full-balance-current-assets.entity';
import { FullBalanceNonCurrentAssets } from '../../full-balance-non-current-assets/entity/full-balance-non-current-assets.entity';

@Entity()
export class FullBalanceActive extends LeasingBaseEntity {
  @Column()
  nonCurrentAssets: FullBalanceNonCurrentAssets;

  @Column()
  currentAssets: FullBalanceCurrentAssets;
}
