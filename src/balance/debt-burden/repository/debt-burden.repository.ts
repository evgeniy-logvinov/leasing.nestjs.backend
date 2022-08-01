import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Client } from 'src/user-info/client/entity/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateDebtBurdenDto } from '../dto/create-debt-burden.dto';
import { DebtBurden } from '../entity/debt-burden.entity';

@EntityRepository(DebtBurden)
export class DebtBurdenRepository extends Repository<DebtBurden> {
  async createDebtBurden(
    {
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
    }: CreateDebtBurdenDto,
    debtBurden: DebtBurden,
  ): Promise<{ message: string; id: string }> {
    const client = await Client.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    try {
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
