import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '../role/repository/role.repository';
import { LeasingCompanyController } from './leasing-company.controller';
import { LeasingCompanyRepository } from './repository/leasing-company.repository';
import { LeasingCompanyService } from './service/leasing-company.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([LeasingCompanyRepository, RoleRepository]),
  ],
  controllers: [LeasingCompanyController],
  providers: [LeasingCompanyService],
})
export class LeasingCompanyModule {}
