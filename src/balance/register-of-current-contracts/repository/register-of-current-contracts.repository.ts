import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Client } from 'src/user-info/client/entity/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateRegisterOfCurrentContractDto } from '../dto/create-register-of-current-contract.dto';
import { RegisterOfCurrentContracts } from '../entity/register-of-current-contracts.entity';

@EntityRepository(RegisterOfCurrentContracts)
export class RegisterOfCurrentContractsRepository extends Repository<RegisterOfCurrentContracts> {
  async createRegisterOfCurrentContracts(
    {
      clientId,
      amountOfPaidWork,
      endDate,
      scopeOfWorkPerformed,
      startDate,
      summOfAgreement,
    }: CreateRegisterOfCurrentContractDto,
    registerOfCurrentContracts: RegisterOfCurrentContracts,
  ): Promise<{ message: string; id: string }> {
    const client = await Client.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    try {
      registerOfCurrentContracts.amountOfPaidWork = amountOfPaidWork;
      registerOfCurrentContracts.endDate = endDate;
      registerOfCurrentContracts.scopeOfWorkPerformed = scopeOfWorkPerformed;
      registerOfCurrentContracts.startDate = startDate;
      registerOfCurrentContracts.summOfAgreement = summOfAgreement;
      registerOfCurrentContracts.save();
      await registerOfCurrentContracts.save();
      return {
        message: 'Full balance successfully created !',
        id: registerOfCurrentContracts.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
