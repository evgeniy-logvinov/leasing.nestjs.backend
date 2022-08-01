import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateProfitAndLossStatementDto } from '../dto/create-profit-and-loss-statement.dto';
import { ProfitAndLossStatement } from '../entity/profit-and-loss-statement.entity';
import { ProfitAndLossStatementRepository } from '../repository/profit-and-loss-statement.repository';

@Injectable()
export class ProfitAndLossStatementService {
  constructor(
    @InjectRepository(ProfitAndLossStatementRepository)
    private profitAndLossStatementRepository: ProfitAndLossStatementRepository,
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async setProfitAndLossStatement(
    profitAndLossStatementDto: CreateProfitAndLossStatementDto,
  ): Promise<{ message: string; id: string }> {
    const client = await this.clientRepository.findOne({
      where: { id: profitAndLossStatementDto.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    let profitAndLossStatement =
      await this.profitAndLossStatementRepository.findOne({
        where: { clientId: client.id },
      });

    if (!profitAndLossStatement) {
      profitAndLossStatement = ProfitAndLossStatement.create();
      profitAndLossStatement.client = client;
    }
    const { id } =
      await this.profitAndLossStatementRepository.createProfitAndLossStatement(
        profitAndLossStatementDto,
        profitAndLossStatement,
      );

    return { message: 'Full balance created', id };
  }

  async getProfitAndLossStatement(
    clientId: string,
  ): Promise<ProfitAndLossStatement> {
    const profitAndLossStatement =
      await this.profitAndLossStatementRepository.findOne({
        where: clientId,
      });

    if (!profitAndLossStatement) {
      throw new NotFoundException('Full balance not found.');
    }

    return profitAndLossStatement;
  }
}
