import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeasingCompanyEmployeesDto } from '../dto/leasing-company-employees.dto';
import { UpdateLeasingCompanyEmployeesDto } from '../dto/update-leasing-company-employees.dto';
import { LeasingCompanyEmployees } from '../entity/leasing-company-employees.entity';
import { LeasingCompanyEmployeesRepository } from '../repository/leasing-company-employees.repository';

@Injectable()
export class LeasingCompanyEmployeesService {
  constructor(
    @InjectRepository(LeasingCompanyEmployeesRepository)
    private leasingCompanyEmployeesRepository: LeasingCompanyEmployeesRepository,
  ) {}

  async getAllLeasingCompaniesEmployees(): Promise<LeasingCompanyEmployees[]> {
    return this.leasingCompanyEmployeesRepository.find();
  }

  async createLeasingCompanyEmployees(
    companyEmployees: LeasingCompanyEmployeesDto,
  ): Promise<LeasingCompanyEmployees> {
    return this.leasingCompanyEmployeesRepository.createLeasingCompanyEmployees(
      companyEmployees,
    );
  }

  async updateLeasingCompanyEmployees(
    leasingCompanyEmployeesDto: UpdateLeasingCompanyEmployeesDto,
  ): Promise<LeasingCompanyEmployees> {
    const leasingCompanyEmployees = await this.getLeasingCompanyEmployeesById(
      leasingCompanyEmployeesDto.id,
    );
    // leasingCompanyEmployees.analiticsDepartment =
    //   leasingCompanyEmployeesDto.analiticsDepartment;
    // leasingCompanyEmployees.salesDepartment =
    //   leasingCompanyEmployeesDto.salesDepartment;

    await leasingCompanyEmployees.save();

    return leasingCompanyEmployees;
  }

  async getLeasingCompanyEmployeesById(
    id: string,
  ): Promise<LeasingCompanyEmployees> {
    const leasingCompanyEmployees =
      await this.leasingCompanyEmployeesRepository.findOne({
        where: { leasingCompany: id },
      });

    if (!leasingCompanyEmployees) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return leasingCompanyEmployees;
  }
}
