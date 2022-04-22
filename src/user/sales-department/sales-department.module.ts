import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesDepartmentRepository } from './repository/sales-department.repository';
import { SalesDepartmentService } from './service/sales-department.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalesDepartmentRepository])],
  controllers: [],
  providers: [SalesDepartmentService],
})
export class SalesDepartmentModule {}
