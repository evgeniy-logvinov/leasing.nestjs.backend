import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class FullBalanceCapitalAndReserves extends LeasingBaseEntity {
  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  authorizedCapital: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  ownShares: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  revalutionOfNonCurrentAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  additionalCapital: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  reserveCapital: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  retainedEarnings: BalanceHistoryThreeMonths;
}
