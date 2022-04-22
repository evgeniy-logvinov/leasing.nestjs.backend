import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentRepository } from './repository/department.repository';
import { DepartmentService } from './service/department.service';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentRepository])],
  controllers: [],
  providers: [DepartmentService],
})
export class DepartmentModule {}
