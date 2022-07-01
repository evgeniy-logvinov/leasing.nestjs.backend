import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LeasingCompanyDto } from './dto/leasing-company.dto';
import { UpdateLeasingCompanyDto } from './dto/update-leasing-company.dto';
import { LeasingCompany } from './entity/leasing-company.entity';
import { LeasingCompanyPayload } from './interface/leasing-company-payload.interface';
import { LeasingCompanyService } from './service/leasing-company.service';

@ApiTags('LeasingCompany')
@ApiBearerAuth()
@Controller('leasing-company')
@UseGuards(AuthGuard())
export class LeasingCompanyController {
  constructor(private leasingCompanyService: LeasingCompanyService) {}

  @Get()
  getAllLeasingCompanies(): Promise<LeasingCompanyPayload[]> {
    return this.leasingCompanyService.getAllLeasingCompanies();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createLeasingCompany(
    @Body() leasingCompanyDto: LeasingCompanyDto,
  ): Promise<LeasingCompany> {
    return this.leasingCompanyService.createLeasingCompany(leasingCompanyDto);
  }

  @Patch()
  updateLeasingCompanyById(
    @Body() leasingCompanyDto: UpdateLeasingCompanyDto,
  ): Promise<LeasingCompanyPayload> {
    return this.leasingCompanyService.updateLeasingCompany(leasingCompanyDto);
  }

  @Patch('/invite')
  inviteLeasingCompanyById(
    @Body() leasingCompanyDto: UpdateLeasingCompanyDto,
  ): Promise<LeasingCompanyPayload> {
    return this.leasingCompanyService.inviteCompany(leasingCompanyDto);
  }
}
