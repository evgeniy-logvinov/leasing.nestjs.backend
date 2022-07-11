import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';
import { FullBalanceCapitalAndReserves } from '../../full-balance-capital-and-reserves/entity/full-balance-capital-and-reserves.entity';
import { FullBalanceLongTermLiabilities } from '../../full-balance-long-term-liabilities/entity/full-balance-long-term-liabilities.entity';
import { FullBalanceShortTermLiabilities } from '../../full-balance-short-term-liabilities/entity/full-balance-short-term-liabilities.entity';

@Entity()
export class FullBalancePassive extends LeasingBaseEntity {
  @Column()
  capitalAndReserves: FullBalanceCapitalAndReserves;

  @Column()
  longTermLiabilities: FullBalanceLongTermLiabilities;

  @Column()
  shortTermLiabilities: FullBalanceShortTermLiabilities;
}
