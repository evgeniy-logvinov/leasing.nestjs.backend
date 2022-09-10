import { InternalServerErrorException } from '@nestjs/common';
import { BalanceHistoryThreeMonthDto } from 'src/balance/balance-history-three-months/dto/balance-history-three-months.dto';
import { BalanceHistoryThreeMonths } from 'src/balance/balance-history-three-months/entity/balance-history-three-months.entity';
import { ClientNotFoundException } from 'src/handlers/errors/ClientNotFoundException';
import { EntityRepository, Repository } from 'typeorm';
import { CreateFullBalanceDto } from '../dto/create-full-balance.dto';
import { FullBalance } from '../entity/full-balance.entity';
import { FullBalanceActiveDto } from '../full-balance-active/dto/full-balance-active.dto';
import { FullBalanceActive } from '../full-balance-active/entity/full-balance-active.entity';
import { FullBalanceCapitalAndReservesDto } from '../full-balance-capital-and-reserves/dto/full-balance-capital-and-reserves.dto';
import { FullBalanceCapitalAndReserves } from '../full-balance-capital-and-reserves/entity/full-balance-capital-and-reserves.entity';
import { FullBalanceCurrentAssetsDto } from '../full-balance-current-assets/dto/full-balance-current-assets.dto';
import { FullBalanceCurrentAssets } from '../full-balance-current-assets/entity/full-balance-current-assets.entity';
import { FullBalanceLongTermLiabilitiesDto } from '../full-balance-long-term-liabilities/dto/full-balance-long-term-liabilities.dto';
import { FullBalanceLongTermLiabilities } from '../full-balance-long-term-liabilities/entity/full-balance-long-term-liabilities.entity';
import { FullBalanceNonCurrentAssetsDto } from '../full-balance-non-current-assets/dto/full-balance-non-current-assets.dto';
import { FullBalanceNonCurrentAssets } from '../full-balance-non-current-assets/entity/full-balance-non-current-assets.entity';
import { FullBalancePassiveDto } from '../full-balance-passive/dto/full-balance-passive.dto';
import { FullBalancePassive } from '../full-balance-passive/entity/full-balance-passive.entity';
import { FullBalanceShortTermLiabilitiesDto } from '../full-balance-short-term-liabilities/dto/full-balance-short-term-liabilities.dto';
import { FullBalanceShortTermLiabilities } from '../full-balance-short-term-liabilities/entity/full-balance-short-term-liabilities.entity';

@EntityRepository(FullBalance)
export class FullBalanceRepository extends Repository<FullBalance> {
  async createFullBalance(
    fullBalanceDto: CreateFullBalanceDto,
  ): Promise<{ message: string; id: string }> {
    const { active, clientId, passive } = fullBalanceDto;
    if (!clientId) {
      throw new ClientNotFoundException();
    }

    try {
      // TODO: check
      const fullBalance = await this.findOne({
        where: { client: { id: clientId } },
      });

      fullBalance.active = await this.createActive(active);
      fullBalance.passive = await this.createPassive(passive);

      return {
        message: 'Full balance successfully created !',
        id: fullBalance.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async createActive({
    id,
    currentAssets,
    nonCurrentAssets,
  }: FullBalanceActiveDto): Promise<FullBalanceActive> {
    const newActive = await FullBalanceActive.findOne({
      where: { id },
    });

    newActive.currentAssets = await this.createCurrentAssets(currentAssets);
    newActive.nonCurrentAssets = await this.createNonCurrentAssets(
      nonCurrentAssets,
    );

    return newActive;
  }

  async createPassive({
    id,
    capitalAndReserves,
    longTermLiabilities,
    shortTermLiabilities,
  }: FullBalancePassiveDto): Promise<FullBalancePassive> {
    const newPassive = await FullBalancePassive.findOne({
      where: { id },
    });

    newPassive.capitalAndReserves = await this.createCapitalAndReserves(
      capitalAndReserves,
    );

    newPassive.longTermLiabilities = await this.createLongTermLiabilities(
      longTermLiabilities,
    );

    newPassive.shortTermLiabilities = await this.createShortTermLiabilities(
      shortTermLiabilities,
    );

    return newPassive;
  }

  async createCapitalAndReserves({
    id,
    authorizedCapital,
    ownShares,
    revalutionOfNonCurrentAssets,
    additionalCapital,
    reserveCapital,
    retainedEarnings,
  }: FullBalanceCapitalAndReservesDto): Promise<FullBalanceCapitalAndReserves> {
    const newCapitalAndReserves = await FullBalanceCapitalAndReserves.findOne({
      where: { id },
    });

    newCapitalAndReserves.authorizedCapital =
      await this.createThreeMonthHistory(authorizedCapital);

    newCapitalAndReserves.ownShares = await this.createThreeMonthHistory(
      ownShares,
    );

    newCapitalAndReserves.revalutionOfNonCurrentAssets =
      await this.createThreeMonthHistory(revalutionOfNonCurrentAssets);

    newCapitalAndReserves.additionalCapital =
      await this.createThreeMonthHistory(additionalCapital);

    newCapitalAndReserves.reserveCapital = await this.createThreeMonthHistory(
      reserveCapital,
    );

    newCapitalAndReserves.retainedEarnings = await this.createThreeMonthHistory(
      retainedEarnings,
    );

    return newCapitalAndReserves;
  }

  async createLongTermLiabilities({
    id,
    borrowedFunds,
    defferedTaxLiabilities,
    estimatedLiabilities,
    otherLiabilities,
  }: FullBalanceLongTermLiabilitiesDto): Promise<FullBalanceLongTermLiabilities> {
    const newFullBalanceLongTermLiabilities =
      await FullBalanceLongTermLiabilities.findOne({
        where: { id },
      });

    newFullBalanceLongTermLiabilities.borrowedFunds =
      await this.createThreeMonthHistory(borrowedFunds);

    newFullBalanceLongTermLiabilities.defferedTaxLiabilities =
      await this.createThreeMonthHistory(defferedTaxLiabilities);

    newFullBalanceLongTermLiabilities.estimatedLiabilities =
      await this.createThreeMonthHistory(estimatedLiabilities);

    newFullBalanceLongTermLiabilities.otherLiabilities =
      await this.createThreeMonthHistory(otherLiabilities);

    return newFullBalanceLongTermLiabilities;
  }

  async createShortTermLiabilities({
    id,
    borrowedFunds,
    creditorDebt,
    defferedIncome,
    estimatedLiabilities,
    otherLiabilities,
  }: FullBalanceShortTermLiabilitiesDto): Promise<FullBalanceShortTermLiabilities> {
    const newFullBalanceShortTermLiabilities =
      await FullBalanceShortTermLiabilities.findOne({
        where: { id },
      });

    newFullBalanceShortTermLiabilities.borrowedFunds =
      await this.createThreeMonthHistory(borrowedFunds);

    newFullBalanceShortTermLiabilities.creditorDebt =
      await this.createThreeMonthHistory(creditorDebt);

    newFullBalanceShortTermLiabilities.defferedIncome =
      await this.createThreeMonthHistory(defferedIncome);

    newFullBalanceShortTermLiabilities.estimatedLiabilities =
      await this.createThreeMonthHistory(estimatedLiabilities);

    newFullBalanceShortTermLiabilities.otherLiabilities =
      await this.createThreeMonthHistory(otherLiabilities);

    return newFullBalanceShortTermLiabilities;
  }

  async createCurrentAssets({
    id,
    reserves,
    ndcAcquiredValuables,
    accountsReceivable,
    finInvestmentsExcludingCashEquivalents,
    cashAndCashEquivalents,
    otherCurrentAssets,
  }: FullBalanceCurrentAssetsDto): Promise<FullBalanceCurrentAssets> {
    const newAssets = await FullBalanceCurrentAssets.findOne({
      where: { id },
    });

    newAssets.reserves = await this.createThreeMonthHistory(reserves);
    newAssets.ndcAcquiredValuables = await this.createThreeMonthHistory(
      ndcAcquiredValuables,
    );
    newAssets.accountsReceivable = await this.createThreeMonthHistory(
      accountsReceivable,
    );
    newAssets.finInvestmentsExcludingCashEquivalents =
      await this.createThreeMonthHistory(
        finInvestmentsExcludingCashEquivalents,
      );
    newAssets.cashAndCashEquivalents = await this.createThreeMonthHistory(
      cashAndCashEquivalents,
    );
    newAssets.otherCurrentAssets = await this.createThreeMonthHistory(
      otherCurrentAssets,
    );

    return newAssets;
  }

  async createNonCurrentAssets({
    id,
    nonMaterialAssets,
    researchAndDevelopmentResults,
    nonMaterialSearchAssets,
    basicAssets,
    profitableInvestmentsInMaterialAssets,
    financialInvestments,
    defferedTaxAssets,
    otherNonCurrentAssets,
  }: FullBalanceNonCurrentAssetsDto): Promise<FullBalanceNonCurrentAssets> {
    const newNonCurrentAssets = await FullBalanceNonCurrentAssets.findOne({
      where: { id },
    });

    newNonCurrentAssets.nonMaterialAssets = await this.createThreeMonthHistory(
      nonMaterialAssets,
    );

    newNonCurrentAssets.researchAndDevelopmentResults =
      await this.createThreeMonthHistory(researchAndDevelopmentResults);

    newNonCurrentAssets.nonMaterialSearchAssets =
      await this.createThreeMonthHistory(nonMaterialSearchAssets);

    newNonCurrentAssets.basicAssets = await this.createThreeMonthHistory(
      basicAssets,
    );

    newNonCurrentAssets.profitableInvestmentsInMaterialAssets =
      await this.createThreeMonthHistory(profitableInvestmentsInMaterialAssets);

    newNonCurrentAssets.financialInvestments =
      await this.createThreeMonthHistory(financialInvestments);

    newNonCurrentAssets.defferedTaxAssets = await this.createThreeMonthHistory(
      defferedTaxAssets,
    );

    newNonCurrentAssets.otherNonCurrentAssets =
      await this.createThreeMonthHistory(otherNonCurrentAssets);

    return newNonCurrentAssets;
  }

  async createThreeMonthHistory({
    id,
    currentYear,
    previousYear,
    previuosPreviousYear,
  }: BalanceHistoryThreeMonthDto): Promise<BalanceHistoryThreeMonths> {
    const newThreeMonthHistory = await BalanceHistoryThreeMonths.findOne({
      where: { id },
    });

    newThreeMonthHistory.currentYear = currentYear;
    newThreeMonthHistory.previousYear = previousYear;
    newThreeMonthHistory.previuosPreviousYear = previuosPreviousYear;

    return newThreeMonthHistory;
  }
}
