import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { BalanceHistoryThreeMonthDto } from 'src/balance/balance-history-three-months/dto/balance-history-three-months.dto';
import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { Client } from 'src/user-info/client/entity/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateReducedBalanceDto } from '../dto/create-reduced-balance.dto';
import { ReducedBalance } from '../entity/reduced-balance.entity';
import { ReducedBalanceActiveDto } from '../reduced-balance-active/dto/reduced-balance-active.dto';
import { ReducedBalanceActive } from '../reduced-balance-active/entity/reduced-balance-active.entity';
import { ReducedBalancePassiveDto } from '../reduced-balance-passive/dto/reduced-balance-passive.dto';
import { ReducedBalancePassive } from '../reduced-balance-passive/entity/reduced-balance-passive.entity';

@EntityRepository(ReducedBalance)
export class ReducedBalanceRepository extends Repository<ReducedBalance> {
  async createReducedBalance(
    reducedBalanceDto: CreateReducedBalanceDto,
    reducedBalance: ReducedBalance,
  ): Promise<{ message: string; id: string }> {
    const { active, clientId, passive } = reducedBalanceDto;
    const client = await Client.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    try {
      reducedBalance.active = await this.createActive(active);
      reducedBalance.passive = await this.createPassive(passive);

      return {
        message: 'Full balance successfully created !',
        id: reducedBalance.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createActive({
    id,
    cashAndCashEquivalents,
    financialAndOtherCurrentAssets,
    nonTangibleNonCurrentAssets,
    stocks,
    tangibleNonCurrentAssets,
  }: ReducedBalanceActiveDto): Promise<ReducedBalanceActive> {
    let newActive = await ReducedBalanceActive.findOne({
      where: { id },
    });

    if (!newActive) {
      newActive = ReducedBalanceActive.create();
    }

    newActive.cashAndCashEquivalents = await this.createThreeMonthHistory(
      cashAndCashEquivalents,
    );

    newActive.financialAndOtherCurrentAssets =
      await this.createThreeMonthHistory(financialAndOtherCurrentAssets);

    newActive.nonTangibleNonCurrentAssets = await this.createThreeMonthHistory(
      nonTangibleNonCurrentAssets,
    );

    newActive.stocks = await this.createThreeMonthHistory(stocks);

    newActive.tangibleNonCurrentAssets = await this.createThreeMonthHistory(
      tangibleNonCurrentAssets,
    );

    return newActive;
  }

  async createPassive({
    id,
    capitalAndReserves,
    longTermLiabilities,
    shortTermLiabilities,
    accountsPayable,
    otherAccountsPayable,
    otherLongTermLiabilities,
  }: ReducedBalancePassiveDto): Promise<ReducedBalancePassive> {
    let newPassive = await ReducedBalancePassive.findOne({
      where: { id },
    });

    if (!newPassive) {
      newPassive = ReducedBalancePassive.create();
    }

    newPassive.capitalAndReserves = await this.createThreeMonthHistory(
      capitalAndReserves,
    );

    newPassive.longTermLiabilities = await this.createThreeMonthHistory(
      longTermLiabilities,
    );

    newPassive.shortTermLiabilities = await this.createThreeMonthHistory(
      shortTermLiabilities,
    );

    newPassive.accountsPayable = await this.createThreeMonthHistory(
      accountsPayable,
    );

    newPassive.otherAccountsPayable = await this.createThreeMonthHistory(
      otherAccountsPayable,
    );

    newPassive.otherLongTermLiabilities = await this.createThreeMonthHistory(
      otherLongTermLiabilities,
    );

    return newPassive;
  }

  async createThreeMonthHistory({
    id,
    currentYear,
    previousYear,
    previuosPreviousYear,
  }: BalanceHistoryThreeMonthDto): Promise<BalanceHistoryThreeMonths> {
    let newThreeMonthHistory = await BalanceHistoryThreeMonths.findOne({
      where: { id },
    });

    if (!newThreeMonthHistory) {
      newThreeMonthHistory = BalanceHistoryThreeMonths.create();
    }

    newThreeMonthHistory.currentYear = currentYear;
    newThreeMonthHistory.previousYear = previousYear;
    newThreeMonthHistory.previuosPreviousYear = previuosPreviousYear;

    return newThreeMonthHistory;
  }
}
