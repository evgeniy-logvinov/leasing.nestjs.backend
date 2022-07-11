import { BalanceHistoryTwoMonths } from 'src/balance/balance-history-two-months/entity/balance-history-two-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProfitAndLossStatement extends LeasingBaseEntity {
  @Column()
  revenue: BalanceHistoryTwoMonths;

  @Column()
  costOfSales: BalanceHistoryTwoMonths;

  @Column()
  grossProfit: BalanceHistoryTwoMonths;

  @Column()
  commercialExpenses: BalanceHistoryTwoMonths;

  @Column()
  managementExpenses: BalanceHistoryTwoMonths;

  @Column()
  profitFromSales: BalanceHistoryTwoMonths;

  @Column()
  incomeFromParticipation: BalanceHistoryTwoMonths;

  @Column()
  interestReceivable: BalanceHistoryTwoMonths;

  @Column()
  interestPayable: BalanceHistoryTwoMonths;

  @Column()
  otherIncome: BalanceHistoryTwoMonths;

  @Column()
  otherExpenses: BalanceHistoryTwoMonths;

  @Column()
  profitBeforeTax: BalanceHistoryTwoMonths;

  @Column()
  currentIncomeTax: BalanceHistoryTwoMonths;

  @Column()
  changeInDeferredTaxLiabilities: BalanceHistoryTwoMonths;

  @Column()
  changeInDeferredTaxAssets: BalanceHistoryTwoMonths;

  @Column()
  other: BalanceHistoryTwoMonths;

  @Column()
  netProfit: BalanceHistoryTwoMonths;
}
