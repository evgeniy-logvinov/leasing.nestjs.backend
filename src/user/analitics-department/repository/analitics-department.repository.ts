import { EntityRepository, Repository } from 'typeorm';
import { AnaliticsDepartmentDto } from '../dto/analitics-department.dto';
import { AnaliticsDepartment } from '../entity/analitics-department.entity';

@EntityRepository(AnaliticsDepartment)
export class AnaliticsDepartmentRepository extends Repository<AnaliticsDepartment> {
  async createAnaliticsDepartment(
    analiticsDepartmentDto: AnaliticsDepartmentDto,
  ): Promise<AnaliticsDepartment> {
    const { employees, headOfDepartment } = analiticsDepartmentDto;

    const analiticsDepartment = new AnaliticsDepartment();

    analiticsDepartment.employees = employees;
    analiticsDepartment.headOfDepartment = headOfDepartment;

    await analiticsDepartment.save();

    return analiticsDepartment;
  }
}
