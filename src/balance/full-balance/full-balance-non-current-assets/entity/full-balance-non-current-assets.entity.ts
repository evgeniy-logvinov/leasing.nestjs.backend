import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class FullBalanceNonCurrentAssets extends LeasingBaseEntity {
  @Column()
  nonMaterialAssets: BalanceHistoryThreeMonths;

  @Column()
  researchAndDevelopmentResults: BalanceHistoryThreeMonths;

  @Column()
  nonMaterialSearchAssets: BalanceHistoryThreeMonths;

  @Column()
  basicAssets: BalanceHistoryThreeMonths;

  @Column()
  profitableInvestmentsInMaterialAssets: BalanceHistoryThreeMonths;

  @Column()
  financialInvestments: BalanceHistoryThreeMonths;

  @Column()
  defferedTaxAssets: BalanceHistoryThreeMonths;

  @Column()
  otherNonCurrentAssets: BalanceHistoryThreeMonths;
}
