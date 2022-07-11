import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class FullBalanceLongTermLiabilities extends LeasingBaseEntity {
  @Column()
  borrowedFunds: BalanceHistoryThreeMonths;

  @Column()
  defferedTaxLiabilities: BalanceHistoryThreeMonths;

  @Column()
  estimatedLiabilities: BalanceHistoryThreeMonths;

  @Column()
  otherLiabilities: BalanceHistoryThreeMonths;
}
