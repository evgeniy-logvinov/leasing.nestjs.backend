import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { DebtBurdenController } from './debt-burden/debt-burden.controller';
import { DebtBurdenRepository } from './debt-burden/repository/debt-burden.repository';
import { DebtBurdenService } from './debt-burden/service/debt-burden.service';
import { FullBalanceController } from './full-balance/full-balance.controller';
import { FullBalanceRepository } from './full-balance/repository/full-balance.repository';
import { FullBalanceService } from './full-balance/service/full-balance.service';
import { ProfitAndLossStatementController } from './profit-and-loss-statement/profit-and-loss-statement.controller';
import { ProfitAndLossStatementRepository } from './profit-and-loss-statement/repository/profit-and-loss-statement.repository';
import { ProfitAndLossStatementService } from './profit-and-loss-statement/service/profit-and-loss-statement.service';
import { ReducedBalanceController } from './reduced-balance/reduced-balance.controller';
import { ReducedBalanceRepository } from './reduced-balance/repository/reduced-balance.repository';
import { ReducedBalanceService } from './reduced-balance/service/reduced-balance.service';
import { RegisterOfCurrentContractsController } from './register-of-current-contracts/register-of-current-contracts.controller';
import { RegisterOfCurrentContractsRepository } from './register-of-current-contracts/repository/register-of-current-contracts.repository';
import { RegisterOfCurrentContractsService } from './register-of-current-contracts/service/register-of-current-contracts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FullBalanceRepository,
      ProfitAndLossStatementRepository,
      ReducedBalanceRepository,
      RegisterOfCurrentContractsRepository,
      DebtBurdenRepository,
    ]),
  ],
  controllers: [
    FullBalanceController,
    ProfitAndLossStatementController,
    ReducedBalanceController,
    RegisterOfCurrentContractsController,
    DebtBurdenController,
  ],
  providers: [
    FullBalanceService,
    ProfitAndLossStatementService,
    ReducedBalanceService,
    RegisterOfCurrentContractsService,
    DebtBurdenService,
    ClientRepository,
  ],
})
export class BalanceModule {}
