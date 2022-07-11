import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class ReducedBalanceActive extends LeasingBaseEntity {
  @Column()
  tangibleNonCurrentAssets: BalanceHistoryThreeMonths;

  @Column()
  nonTangibleNonCurrentAssets: BalanceHistoryThreeMonths;

  @Column()
  stocks: BalanceHistoryThreeMonths;

  @Column()
  cashAndCashEquivalents: BalanceHistoryThreeMonths;

  @Column()
  financialAndOtherCurrentAssets: BalanceHistoryThreeMonths;
}
