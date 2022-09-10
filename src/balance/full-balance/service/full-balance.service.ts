import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientNotFoundException } from 'src/handlers/errors/ClientNotFoundException';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateFullBalanceDto } from '../dto/create-full-balance.dto';
import { FullBalance } from '../entity/full-balance.entity';
import { FullBalanceRepository } from '../repository/full-balance.repository';

@Injectable()
export class FullBalanceService {
  constructor(
    @InjectRepository(FullBalanceRepository)
    private fullBalanceRepository: FullBalanceRepository,
  ) {}

  async setFullBalance(
    fullBalanceDto: CreateFullBalanceDto,
  ): Promise<{ message: string; id: string }> {
    const { id } = await this.fullBalanceRepository.createFullBalance(
      fullBalanceDto,
    );

    return { message: 'Full balance created', id };
  }

  async getFullBalance(clientId: string): Promise<FullBalance> {
    const fullBalance = await this.fullBalanceRepository.findOne({
      where: clientId,
    });

    if (!fullBalance) {
      throw new NotFoundException('Full balance not found.');
    }

    return fullBalance;
  }
}
