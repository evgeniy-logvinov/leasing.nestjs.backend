import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDebtBurdenDto } from '../dto/create-debt-burden.dto';
import { DebtBurden } from '../entity/debt-burden.entity';
import { DebtBurdenRepository } from '../repository/debt-burden.repository';

@Injectable()
export class DebtBurdenService {
  constructor(
    @InjectRepository(DebtBurdenRepository)
    private debtBurdenRepository: DebtBurdenRepository,
  ) {}

  async setDebtBurden(
    debtBurdenDto: CreateDebtBurdenDto,
  ): Promise<{ message: string; id: string }> {
    const { id } = await this.debtBurdenRepository.createDebtBurden(
      debtBurdenDto,
    );

    return { message: 'Debt burden created', id };
  }

  async getDebtBurden(clientId: string): Promise<DebtBurden> {
    const debtBurden = await this.debtBurdenRepository.findOneOrFail({
      where: clientId,
    });
    // TODO: check how it fails
    // if (!debtBurden) {
    //   throw new NotFoundException('Debt burden not found.');
    // }

    return debtBurden;
  }
}
