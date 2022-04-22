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
import { UserInfoRepository } from './repository/user-info.repository';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';
import { AnaliticsDepartmentRepository } from './analitics-department/repository/analitics-department.repository';
import { AnaliticsDepartmentService } from './analitics-department/service/analitics-department.service';
import { SalesDepartmentRepository } from './sales-department/repository/sales-department.repository';
import { SalesDepartmentService } from './sales-department/service/sales-department.service';

// TODO: check modules
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forFeature([
      UserInfoRepository,
      ClientRepository,
      LeasingCompanyRepository,
      EmployeeRepository,
      RegionRepository,
      AnaliticsDepartmentRepository,
      SalesDepartmentRepository,
    ]),
  ],
  controllers: [UserController, ClientController, LeasingCompanyController],
  providers: [
    UserService,
    ClientService,
    LeasingCompanyService,
    EmployeeService,
    RegionService,
    AnaliticsDepartmentService,
    SalesDepartmentService,
  ],
})
export class UserModule {}
