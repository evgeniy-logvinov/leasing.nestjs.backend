import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class FullBalanceCurrentAssets extends LeasingBaseEntity {
  @Column()
  reserves: BalanceHistoryThreeMonths;

  @Column()
  ndcAcquiredValuables: BalanceHistoryThreeMonths;

  @Column()
  accountsReceivable: BalanceHistoryThreeMonths;

  @Column()
  finInvestmentsExcludingCashEquivalents: BalanceHistoryThreeMonths;

  @Column()
  cashAndCashEquivalents: BalanceHistoryThreeMonths;

  @Column()
  otherCurrentAssets: BalanceHistoryThreeMonths;
}
