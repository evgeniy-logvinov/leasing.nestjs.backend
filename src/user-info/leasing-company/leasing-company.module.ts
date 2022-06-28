import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeasingCompanyController } from './leasing-company.controller';
import { LeasingCompanyRepository } from './repository/leasing-company.repository';
import { LeasingCompanyService } from './service/leasing-company.service';

@Module({
  imports: [TypeOrmModule.forFeature([LeasingCompanyRepository])],
  controllers: [LeasingCompanyController],
  providers: [LeasingCompanyService],
})
export class LeasingCompanyModule {}
