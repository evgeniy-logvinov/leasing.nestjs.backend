import { EntityRepository, Repository } from 'typeorm';
import { LeasingCompanyEmployeesDto } from '../dto/leasing-company-employees.dto';
import { LeasingCompanyEmployees } from '../entity/leasing-company-employees.entity';

@EntityRepository(LeasingCompanyEmployees)
export class LeasingCompanyEmployeesRepository extends Repository<LeasingCompanyEmployees> {
  async createLeasingCompanyEmployees(
    leasingCompanyEmployeesDto: LeasingCompanyEmployeesDto,
  ): Promise<LeasingCompanyEmployees> {
    const { analiticsDepartment, salesDepartment } = leasingCompanyEmployeesDto;

    const leasingCompanyEmployees = new LeasingCompanyEmployees();

    leasingCompanyEmployees.analiticsDepartment = analiticsDepartment;
    leasingCompanyEmployees.salesDepartment = salesDepartment;

    await leasingCompanyEmployees.save();

    return leasingCompanyEmployees;
  }
}
