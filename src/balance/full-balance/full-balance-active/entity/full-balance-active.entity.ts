import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { FullBalanceCurrentAssets } from '../../full-balance-current-assets/entity/full-balance-current-assets.entity';
import { FullBalanceNonCurrentAssets } from '../../full-balance-non-current-assets/entity/full-balance-non-current-assets.entity';

@Entity()
export class FullBalanceActive extends LeasingBaseEntity {
  @OneToOne(() => FullBalanceNonCurrentAssets, { eager: true })
  @JoinColumn()
  nonCurrentAssets: FullBalanceNonCurrentAssets;

  @OneToOne(() => FullBalanceCurrentAssets, { eager: true })
  @JoinColumn()
  currentAssets: FullBalanceCurrentAssets;
}
