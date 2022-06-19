import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './repository/employee.repository';
import { EmployeeService } from './service/employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository])],
  controllers: [],
  providers: [EmployeeService],
})
export class EmployeeModule {}
