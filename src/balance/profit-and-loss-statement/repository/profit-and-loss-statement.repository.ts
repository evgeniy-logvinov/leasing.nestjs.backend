import { InternalServerErrorException } from '@nestjs/common';
import { BalanceHistoryTwoMonthDto } from 'src/balance/balance-history-two-months/dto/balance-history-two-months.dto';
import { BalanceHistoryTwoMonths } from 'src/balance/balance-history-two-months/entity/balance-history-two-months.entity';
import { ClientNotFoundException } from 'src/handlers/errors/ClientNotFoundException';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProfitAndLossStatementDto } from '../dto/create-profit-and-loss-statement.dto';
import { ProfitAndLossStatement } from '../entity/profit-and-loss-statement.entity';

@EntityRepository(ProfitAndLossStatement)
export class ProfitAndLossStatementRepository extends Repository<ProfitAndLossStatement> {
  async createProfitAndLossStatement({
    clientId,
    revenue,
    costOfSales,
    grossProfit,
    commercialExpenses,
    managementExpenses,
    profitFromSales,
    incomeFromParticipation,
    interestReceivable,
    interestPayable,
    otherIncome,
    otherExpenses,
    profitBeforeTax,
    currentIncomeTax,
    changeInDeferredTaxLiabilities,
    changeInDeferredTaxAssets,
    other,
    netProfit,
  }: CreateProfitAndLossStatementDto): Promise<{
    message: string;
    id: string;
  }> {
    if (!clientId) {
      throw new ClientNotFoundException();
    }
    const profitAndLossStatement = await this.findOne({
      where: { client: { id: clientId } },
    });
    try {
      (profitAndLossStatement.revenue = await this.createTwoMonthHistory(
        revenue,
      )),
        (profitAndLossStatement.costOfSales = await this.createTwoMonthHistory(
          costOfSales,
        )),
        (profitAndLossStatement.grossProfit = await this.createTwoMonthHistory(
          grossProfit,
        )),
        (profitAndLossStatement.commercialExpenses =
          await this.createTwoMonthHistory(commercialExpenses)),
        (profitAndLossStatement.managementExpenses =
          await this.createTwoMonthHistory(managementExpenses)),
        (profitAndLossStatement.profitFromSales =
          await this.createTwoMonthHistory(profitFromSales)),
        (profitAndLossStatement.incomeFromParticipation =
          await this.createTwoMonthHistory(incomeFromParticipation)),
        (profitAndLossStatement.interestReceivable =
          await this.createTwoMonthHistory(interestReceivable)),
        (profitAndLossStatement.interestPayable =
          await this.createTwoMonthHistory(interestPayable)),
        (profitAndLossStatement.otherIncome = await this.createTwoMonthHistory(
          otherIncome,
        )),
        (profitAndLossStatement.otherExpenses =
          await this.createTwoMonthHistory(otherExpenses)),
        (profitAndLossStatement.profitBeforeTax =
          await this.createTwoMonthHistory(profitBeforeTax)),
        (profitAndLossStatement.currentIncomeTax =
          await this.createTwoMonthHistory(currentIncomeTax)),
        (profitAndLossStatement.changeInDeferredTaxLiabilities =
          await this.createTwoMonthHistory(changeInDeferredTaxLiabilities)),
        (profitAndLossStatement.changeInDeferredTaxAssets =
          await this.createTwoMonthHistory(changeInDeferredTaxAssets)),
        (profitAndLossStatement.other = await this.createTwoMonthHistory(
          other,
        )),
        (profitAndLossStatement.netProfit = await this.createTwoMonthHistory(
          netProfit,
        )),
        await profitAndLossStatement.save();
      return {
        message: 'Full balance successfully created !',
        id: profitAndLossStatement.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createTwoMonthHistory({
    id,
    currentYear,
    previousYear,
  }: BalanceHistoryTwoMonthDto): Promise<BalanceHistoryTwoMonths> {
    const newTwoMonthHistory = await BalanceHistoryTwoMonths.findOne({
      where: { id },
    });

    newTwoMonthHistory.currentYear = currentYear;
    newTwoMonthHistory.previousYear = previousYear;

    return newTwoMonthHistory;
  }
}
