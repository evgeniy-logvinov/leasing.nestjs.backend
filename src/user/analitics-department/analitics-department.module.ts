import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnaliticsDepartmentRepository } from './repository/analitics-department.repository';
import { AnaliticsDepartmentService } from './service/analitics-department.service';

@Module({
  imports: [TypeOrmModule.forFeature([AnaliticsDepartmentRepository])],
  controllers: [],
  providers: [AnaliticsDepartmentService],
})
export class AnaliticsDepartmentModule {}
