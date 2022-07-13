import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class FullBalanceNonCurrentAssets extends LeasingBaseEntity {
  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  nonMaterialAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  researchAndDevelopmentResults: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  nonMaterialSearchAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  basicAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  profitableInvestmentsInMaterialAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  financialInvestments: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  defferedTaxAssets: BalanceHistoryThreeMonths;

  @OneToOne(() => BalanceHistoryThreeMonths, { eager: true })
  @JoinColumn()
  otherNonCurrentAssets: BalanceHistoryThreeMonths;
}
