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
import { CreateDebtBurdenDto } from './dto/create-debt-burden.dto';
import { DebtBurden } from './entity/debt-burden.entity';
import { DebtBurdenService } from './service/debt-burden.service';

@ApiTags('DebtBurden')
@ApiBearerAuth()
@Controller('debt-burden')
@UseGuards(AuthGuard())
export class DebtBurdenController {
  constructor(private debtBurdenService: DebtBurdenService) {}

  @Get()
  get(@Body() clientId: string): Promise<DebtBurden> {
    return this.debtBurdenService.getDebtBurden(clientId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() debtBurdenDto: CreateDebtBurdenDto,
  ): Promise<{ message: string; id: string }> {
    return this.debtBurdenService.setDebtBurden(debtBurdenDto);
  }
}
