import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentDto } from '../dto/department.dto';
import { UpdateDepartmentDto } from '../dto/update-department.dto';
import { Department } from '../entity/department.entity';
import { DepartmentRepository } from '../repository/department.repository';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentRepository)
    private departmentRepository: DepartmentRepository,
  ) {}

  async getAllDepartments(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async createDepartment(department: DepartmentDto): Promise<Department> {
    return this.departmentRepository.createDepartment(department);
  }

  async updateDepartment(
    departmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const department = await this.getDepartmentById(departmentDto.id);
    department.name = departmentDto.name;
    department.employees = departmentDto.employees;

    await department.save();

    return department;
  }

  async getDepartmentById(id: string): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: { id },
    });

    if (!department) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return department;
  }
}
