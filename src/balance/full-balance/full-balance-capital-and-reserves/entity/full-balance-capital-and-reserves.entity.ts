import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class FullBalanceCapitalAndReserves extends LeasingBaseEntity {
  @Column()
  authorizedCapital: BalanceHistoryThreeMonths;

  @Column()
  ownShares: BalanceHistoryThreeMonths;

  @Column()
  revalutionOfNonCurrentAssets: BalanceHistoryThreeMonths;

  @Column()
  additionalCapital: BalanceHistoryThreeMonths;

  @Column()
  reserveCapital: BalanceHistoryThreeMonths;

  @Column()
  retainedEarnings: BalanceHistoryThreeMonths;
}
