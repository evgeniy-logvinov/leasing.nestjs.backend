import { EntityRepository, Repository } from 'typeorm';
import { DepartmentDto } from '../dto/department.dto';
import { Department } from '../entity/department.entity';

@EntityRepository(Department)
export class DepartmentRepository extends Repository<Department> {
  async createDepartment(departmentDto: DepartmentDto): Promise<Department> {
    const { employees, name } = departmentDto;

    const department = new Department();

    department.name = name;
    department.employees = employees;

    await department.save();

    return department;
  }
}
