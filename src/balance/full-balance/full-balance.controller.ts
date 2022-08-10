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
import { CreateFullBalanceDto } from './dto/create-full-balance.dto';
import { FullBalance } from './entity/full-balance.entity';
import { FullBalanceService } from './service/full-balance.service';

@ApiTags('FullBalance')
@ApiBearerAuth()
@Controller('full-balance')
@UseGuards(AuthGuard())
export class FullBalanceController {
  constructor(private fullBalanceService: FullBalanceService) {}

  @Get()
  get(@Body() clientId: string): Promise<FullBalance> {
    return this.fullBalanceService.getFullBalance(clientId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() fullBalanceDto: CreateFullBalanceDto,
  ): Promise<{ message: string; id: string }> {
    return this.fullBalanceService.setFullBalance(fullBalanceDto);
  }
}
