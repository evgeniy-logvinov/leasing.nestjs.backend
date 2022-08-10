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
import { CreateRegisterOfCurrentContractDto } from './dto/create-register-of-current-contract.dto';
import { RegisterOfCurrentContracts } from './entity/register-of-current-contracts.entity';
import { RegisterOfCurrentContractsService } from './service/register-of-current-contracts.service';

@ApiTags('RegisterOfCurrentContracts')
@ApiBearerAuth()
@Controller('register-of-current-contracts')
@UseGuards(AuthGuard())
export class RegisterOfCurrentContractsController {
  constructor(
    private registerOfCurrentContractsService: RegisterOfCurrentContractsService,
  ) {}

  @Get()
  get(@Body() clientId: string): Promise<RegisterOfCurrentContracts> {
    return this.registerOfCurrentContractsService.getRegisterOfCurrentContracts(
      clientId,
    );
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() registerOfCurrentContractsDto: CreateRegisterOfCurrentContractDto,
  ): Promise<{ message: string; id: string }> {
    return this.registerOfCurrentContractsService.setRegisterOfCurrentContracts(
      registerOfCurrentContractsDto,
    );
  }
}
