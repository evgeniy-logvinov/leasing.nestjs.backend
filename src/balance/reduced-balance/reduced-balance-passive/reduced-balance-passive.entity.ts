import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class ReducedBalancePassive extends LeasingBaseEntity {
  @Column()
  capitalAndReserves: BalanceHistoryThreeMonths;

  @Column()
  longTermLiabilities: BalanceHistoryThreeMonths;

  @Column()
  otherLongTermLiabilities: BalanceHistoryThreeMonths;

  @Column()
  shortTermLiabilities: BalanceHistoryThreeMonths;

  @Column()
  accountsPayable: BalanceHistoryThreeMonths;

  @Column()
  otherAccountsPayable: BalanceHistoryThreeMonths;
}
