import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class FullBalanceCurrentAssets extends LeasingBaseEntity {
  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  reserves: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  ndcAcquiredValuables: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  accountsReceivable: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  finInvestmentsExcludingCashEquivalents: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  cashAndCashEquivalents: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  otherCurrentAssets: BalanceHistoryThreeMonths;
}
