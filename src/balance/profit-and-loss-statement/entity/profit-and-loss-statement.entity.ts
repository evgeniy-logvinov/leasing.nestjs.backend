import { BalanceHistoryTwoMonths } from 'src/balance/balance-history-two-months/entity/balance-history-two-months.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class ProfitAndLossStatement extends LeasingBaseEntity {
  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  revenue: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  costOfSales: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  grossProfit: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  commercialExpenses: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  managementExpenses: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  profitFromSales: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  incomeFromParticipation: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  interestReceivable: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  interestPayable: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  otherIncome: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  otherExpenses: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  profitBeforeTax: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  currentIncomeTax: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  changeInDeferredTaxLiabilities: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  changeInDeferredTaxAssets: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  other: BalanceHistoryTwoMonths;

  @OneToOne(() => BalanceHistoryTwoMonths, { eager: true })
  @JoinColumn()
  netProfit: BalanceHistoryTwoMonths;
}
