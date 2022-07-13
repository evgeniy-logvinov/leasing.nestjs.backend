import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class ReducedBalanceActive extends LeasingBaseEntity {
  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  tangibleNonCurrentAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  nonTangibleNonCurrentAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  stocks: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  cashAndCashEquivalents: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  financialAndOtherCurrentAssets: BalanceHistoryThreeMonths;
}
