import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateProfitAndLossStatementDto } from './dto/create-profit-and-loss-statement.dto';
import { ProfitAndLossStatement } from './entity/profit-and-loss-statement.entity';
import { ProfitAndLossStatementService } from './service/profit-and-loss-statement.service';

@ApiTags('ProfitAndLossStatement')
@ApiBearerAuth()
@Controller('profit-and-loss-statement')
@UseGuards(AuthGuard())
export class ProfitAndLossStatementController {
  constructor(
    private profitAndLossStatementService: ProfitAndLossStatementService,
  ) {}

  @Get()
  get(@Param() params): Promise<ProfitAndLossStatement> {
    return this.profitAndLossStatementService.getProfitAndLossStatement(
      params.clientId,
    );
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() profitAndLossStatementDto: CreateProfitAndLossStatementDto,
  ): Promise<{ message: string; id: string }> {
    return this.profitAndLossStatementService.setProfitAndLossStatement(
      profitAndLossStatementDto,
    );
  }
}
