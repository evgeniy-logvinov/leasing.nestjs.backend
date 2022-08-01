import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateDebtBurdenDto } from '../dto/create-debt-burden.dto';
import { DebtBurden } from '../entity/debt-burden.entity';
import { DebtBurdenRepository } from '../repository/debt-burden.repository';

@Injectable()
export class DebtBurdenService {
  constructor(
    @InjectRepository(DebtBurdenRepository)
    private debtBurdenRepository: DebtBurdenRepository,
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async setDebtBurden(
    debtBurdenDto: CreateDebtBurdenDto,
  ): Promise<{ message: string; id: string }> {
    const client = await this.clientRepository.findOne({
      where: { id: debtBurdenDto.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    let debtBurden = await this.debtBurdenRepository.findOne({
      where: { clientId: client.id },
    });

    if (!debtBurden) {
      debtBurden = DebtBurden.create();
      debtBurden.client = client;
    }
    const { id } = await this.debtBurdenRepository.createDebtBurden(
      debtBurdenDto,
      debtBurden,
    );

    return { message: 'Debt burden created', id };
  }

  async getDebtBurden(clientId: string): Promise<DebtBurden> {
    const debtBurden = await this.debtBurdenRepository.findOne({
      where: clientId,
    });

    if (!debtBurden) {
      throw new NotFoundException('Debt burden not found.');
    }

    return debtBurden;
  }
}
