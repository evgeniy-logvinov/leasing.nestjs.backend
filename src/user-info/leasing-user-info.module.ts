import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client/client.controller';
import { ClientRepository } from './client/repository/client.repository';
import { ClientService } from './client/service/client.service';
import { RegionRepository } from './region/repository/region.repository';
import { RegionService } from './region/service/region.service';
import { EmployeeRepository } from './employee/repository/employee.repository';
import { EmployeeService } from './employee/service/employee.service';
import { LeasingCompanyController } from './leasing-company/leasing-company.controller';
import { LeasingCompanyRepository } from './leasing-company/repository/leasing-company.repository';
import { LeasingCompanyService } from './leasing-company/service/leasing-company.service';
import { AnaliticsDepartmentRepository } from './analitics-department/repository/analitics-department.repository';
import { AnaliticsDepartmentService } from './analitics-department/service/analitics-department.service';
import { SalesDepartmentRepository } from './sales-department/repository/sales-department.repository';
import { SalesDepartmentService } from './sales-department/service/sales-department.service';
import { LeasingCompanyEmployeesController } from './leasing-company-employees/leasing-company-employees.controller';
import { LeasingCompanyEmployeesService } from './leasing-company-employees/service/leasing-company-employees.service';
import { LeasingCompanyEmployeesRepository } from './leasing-company-employees/repository/leasing-company-employees.repository';
import { LeasingUserInfoRepository } from './repository/leasing-user-info.repository';
import { LeasingUserInfoService } from './service/leasing-user-info.service';
import { HeadOfSalesService } from './head-of-sales/service/head-of-sales.service';
import { HeadOfSalesController } from './head-of-sales/head-of-sales.controller';
import { HeadOfSalesRepository } from './head-of-sales/repository/head-of-sales.repository';

// TODO: check modules
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forFeature([
      LeasingUserInfoRepository,
      ClientRepository,
      LeasingCompanyRepository,
      EmployeeRepository,
      RegionRepository,
      AnaliticsDepartmentRepository,
      SalesDepartmentRepository,
      LeasingCompanyEmployeesRepository,
      HeadOfSalesRepository,
    ]),
  ],
  controllers: [
    ClientController,
    LeasingCompanyController,
    LeasingCompanyEmployeesController,
    HeadOfSalesController,
  ],
  providers: [
    LeasingUserInfoService,
    ClientService,
    LeasingCompanyService,
    EmployeeService,
    RegionService,
    AnaliticsDepartmentService,
    SalesDepartmentService,
    LeasingCompanyEmployeesService,
    HeadOfSalesService,
  ],
})
export class LeasingUserInfoModule {}
