import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateReducedBalanceDto } from '../dto/create-reduced-balance.dto';
import { ReducedBalance } from '../entity/reduced-balance.entity';
import { ReducedBalanceRepository } from '../repository/reduced-balance.repository';

@Injectable()
export class ReducedBalanceService {
  constructor(
    @InjectRepository(ReducedBalanceRepository)
    private reducedBalanceRepository: ReducedBalanceRepository,
  ) {}

  async setReducedBalance(
    reducedBalanceDto: CreateReducedBalanceDto,
  ): Promise<{ message: string; id: string }> {
    const { id } = await this.reducedBalanceRepository.createReducedBalance(
      reducedBalanceDto,
    );

    return { message: 'Reduced balance created', id };
  }

  async getReducedBalance(clientId: string): Promise<ReducedBalance> {
    const reducedBalance = await this.reducedBalanceRepository.findOne({
      where: clientId,
    });

    if (!reducedBalance) {
      throw new NotFoundException('Reduced balance not found.');
    }

    return reducedBalance;
  }
}
