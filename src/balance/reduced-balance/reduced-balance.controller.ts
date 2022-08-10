import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateReducedBalanceDto } from './dto/create-reduced-balance.dto';
import { ReducedBalance } from './entity/reduced-balance.entity';
import { ReducedBalanceService } from './service/reduced-balance.service';

@ApiTags('ReducedBalance')
@ApiBearerAuth()
@Controller('reduced-balance')
@UseGuards(AuthGuard())
export class ReducedBalanceController {
  constructor(private reducedBalanceService: ReducedBalanceService) {}

  @Get()
  get(@Body() clientId: string): Promise<ReducedBalance> {
    return this.reducedBalanceService.getReducedBalance(clientId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() reducedBalanceDto: CreateReducedBalanceDto,
  ): Promise<{ message: string; id: string }> {
    return this.reducedBalanceService.setReducedBalance(reducedBalanceDto);
  }
}
