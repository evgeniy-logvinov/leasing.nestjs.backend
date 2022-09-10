import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfitAndLossStatementDto } from '../dto/create-profit-and-loss-statement.dto';
import { ProfitAndLossStatement } from '../entity/profit-and-loss-statement.entity';
import { ProfitAndLossStatementRepository } from '../repository/profit-and-loss-statement.repository';

@Injectable()
export class ProfitAndLossStatementService {
  constructor(
    @InjectRepository(ProfitAndLossStatementRepository)
    private profitAndLossStatementRepository: ProfitAndLossStatementRepository,
  ) {}

  async setProfitAndLossStatement(
    profitAndLossStatementDto: CreateProfitAndLossStatementDto,
  ): Promise<{ message: string; id: string }> {
    const { id } =
      await this.profitAndLossStatementRepository.createProfitAndLossStatement(
        profitAndLossStatementDto,
      );

    return { message: 'Full balance created', id };
  }

  async getProfitAndLossStatement(
    clientId: string,
  ): Promise<ProfitAndLossStatement> {
    const profitAndLossStatement =
      await this.profitAndLossStatementRepository.findOneOrFail({
        where: clientId,
      });

    // if (!profitAndLossStatement) {
    //   throw new NotFoundException('Full balance not found.');
    // }

    return profitAndLossStatement;
  }
}
