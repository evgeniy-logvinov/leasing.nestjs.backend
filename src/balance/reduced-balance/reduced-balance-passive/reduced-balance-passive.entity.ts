import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class ReducedBalancePassive extends LeasingBaseEntity {
  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  capitalAndReserves: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  longTermLiabilities: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  otherLongTermLiabilities: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  shortTermLiabilities: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  accountsPayable: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  otherAccountsPayable: BalanceHistoryThreeMonths;
}
