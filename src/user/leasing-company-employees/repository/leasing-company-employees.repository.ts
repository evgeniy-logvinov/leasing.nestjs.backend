import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { LeasingCompany } from 'src/user/leasing-company/entity/leasing-company.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LeasingCompanyEmployeesDto } from '../dto/leasing-company-employees.dto';
import { LeasingCompanyEmployees } from '../entity/leasing-company-employees.entity';

@EntityRepository(LeasingCompanyEmployees)
export class LeasingCompanyEmployeesRepository extends Repository<LeasingCompanyEmployees> {
  async createLeasingCompanyEmployees(
    leasingCompanyEmployeesDto: LeasingCompanyEmployeesDto,
  ): Promise<LeasingCompanyEmployees> {
    const { analiticsDepartment, salesDepartment } = leasingCompanyEmployeesDto;
    console.log('analiticsDepartment', analiticsDepartment);
    // const leasingCompany = new LeasingCompany();
    const leasingCompanyEmployees = new LeasingCompanyEmployees();
    await leasingCompanyEmployees.save();
    const analitics = new AnaliticsDepartment();
    analitics.headOfDepartment = 'test';
    analitics.leasingCompanyEmployees = leasingCompanyEmployees;
    await analitics.save();
    // leasingCompanyEmployees.salesDepartment = salesDepartment;
    // leasingCompanyEmployees.analiticsDepartment = analiticsDepartment;
    // leasingCompanyEmployees.salesDepartment = salesDepartment;

    return leasingCompanyEmployees;
  }
}
