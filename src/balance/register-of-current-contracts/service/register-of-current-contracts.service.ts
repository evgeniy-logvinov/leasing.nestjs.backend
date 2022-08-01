import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateRegisterOfCurrentContractDto } from '../dto/create-register-of-current-contract.dto';
import { RegisterOfCurrentContracts } from '../entity/register-of-current-contracts.entity';
import { RegisterOfCurrentContractsRepository } from '../repository/register-of-current-contracts.repository';

@Injectable()
export class RegisterOfCurrentContractsService {
  constructor(
    @InjectRepository(RegisterOfCurrentContractsRepository)
    private registerOfCurrentContractsRepository: RegisterOfCurrentContractsRepository,
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async setRegisterOfCurrentContracts(
    registerOfCurrentContractsDto: CreateRegisterOfCurrentContractDto,
  ): Promise<{ message: string; id: string }> {
    const client = await this.clientRepository.findOne({
      where: { id: registerOfCurrentContractsDto.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    let registerOfCurrentContracts =
      await this.registerOfCurrentContractsRepository.findOne({
        where: { clientId: client.id },
      });

    if (!registerOfCurrentContracts) {
      registerOfCurrentContracts = RegisterOfCurrentContracts.create();
      registerOfCurrentContracts.client = client;
    }
    const { id } =
      await this.registerOfCurrentContractsRepository.createRegisterOfCurrentContracts(
        registerOfCurrentContractsDto,
        registerOfCurrentContracts,
      );

    return { message: 'Register of current contracts created', id };
  }

  async getRegisterOfCurrentContracts(
    clientId: string,
  ): Promise<RegisterOfCurrentContracts> {
    const debtBurden = await this.registerOfCurrentContractsRepository.findOne({
      where: clientId,
    });

    if (!debtBurden) {
      throw new NotFoundException('Register of current contracts not found.');
    }

    return debtBurden;
  }
}
