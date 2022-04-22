import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeasingCompanyEmployeesController } from './leasing-company-employees.controller';
import { LeasingCompanyEmployeesRepository } from './repository/leasing-company-employees.repository';
import { LeasingCompanyEmployeesService } from './service/leasing-company-employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([LeasingCompanyEmployeesRepository])],
  controllers: [LeasingCompanyEmployeesController],
  providers: [LeasingCompanyEmployeesService],
})
export class LeasingCompanyEmployeesModule {}
