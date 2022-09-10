import { InternalServerErrorException } from '@nestjs/common';
import { ClientNotFoundException } from 'src/handlers/errors/ClientNotFoundException';
import { EntityRepository, Repository } from 'typeorm';
import { CreateDebtBurdenDto } from '../dto/create-debt-burden.dto';
import { DebtBurden } from '../entity/debt-burden.entity';

@EntityRepository(DebtBurden)
export class DebtBurdenRepository extends Repository<DebtBurden> {
  async createDebtBurden({
    clientId,
    averageMonthlyPayment,
    balanceAsOfCurrentDate,
    balanceAtLastReportingDate,
    maturityDate,
    remainingMaturityDate,
    summ,
    issueDate,
    typeDebtBurden,
    typeOfCommitment,
  }: CreateDebtBurdenDto): Promise<{ message: string; id: string }> {
    if (!clientId) {
      throw new ClientNotFoundException();
    }

    try {
      const debtBurden = await this.findOne({
        where: { client: { id: clientId } },
      });

      debtBurden.averageMonthlyPayment = averageMonthlyPayment;
      debtBurden.balanceAsOfCurrentDate = balanceAsOfCurrentDate;
      debtBurden.balanceAtLastReportingDate = balanceAtLastReportingDate;
      debtBurden.maturityDate = maturityDate;
      debtBurden.remainingMaturityDate = remainingMaturityDate;
      debtBurden.summ = summ;
      debtBurden.issueDate = issueDate;
      debtBurden.typeDebtBurden = typeDebtBurden;
      debtBurden.typeOfCommitment = typeOfCommitment;
      await debtBurden.save();
      return {
        message: 'Full balance successfully created !',
        id: debtBurden.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
