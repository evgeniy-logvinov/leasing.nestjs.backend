import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LeasingCompanyEmployeesDto } from './dto/leasing-company-employees.dto';
import { UpdateLeasingCompanyEmployeesDto } from './dto/update-leasing-company-employees.dto';
import { LeasingCompanyEmployees } from './entity/leasing-company-employees.entity';
import { LeasingCompanyEmployeesService } from './service/leasing-company-employees.service';

@ApiTags('LeasingCompanyEmployees')
@ApiBearerAuth()
@Controller('leasing-company-employees')
@UseGuards(AuthGuard())
export class LeasingCompanyEmployeesController {
  constructor(
    private leasingCompanyEmployeesService: LeasingCompanyEmployeesService,
  ) {}

  @Get()
  getAllLeasingCompanyEmployees(): Promise<LeasingCompanyEmployees[]> {
    return this.leasingCompanyEmployeesService.getAllLeasingCompaniesEmployees();
  }

  @Get('/:id')
  getLeasingCompanyEmployeesById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<LeasingCompanyEmployees> {
    return this.leasingCompanyEmployeesService.getLeasingCompanyEmployeesById(
      id,
    );
  }

  @Post()
  // TODO: check what it means
  @UsePipes(ValidationPipe)
  createLeasingCompany(
    @Body() leasingCompanyEmployeesDto: LeasingCompanyEmployeesDto,
  ): Promise<LeasingCompanyEmployees> {
    return this.leasingCompanyEmployeesService.createLeasingCompanyEmployees(
      leasingCompanyEmployeesDto,
    );
  }

  @Patch()
  updateLeasingCompanyById(
    @Body() leasingCompanyEmployeesDto: UpdateLeasingCompanyEmployeesDto,
  ): Promise<LeasingCompanyEmployees> {
    return this.leasingCompanyEmployeesService.updateLeasingCompanyEmployees(
      leasingCompanyEmployeesDto,
    );
  }
}
