import { Role } from 'src/leasing-base-user/role/entity/role.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LeasingCompanyDto } from '../dto/leasing-company.dto';
import { LeasingCompany } from '../entity/leasing-company.entity';

@EntityRepository(LeasingCompany)
export class LeasingCompanyRepository extends Repository<LeasingCompany> {
  async createLeasingCompany(
    leasingCompanyDto: LeasingCompanyDto,
    role: Role,
  ): Promise<LeasingCompany> {
    const { userName, inn } = leasingCompanyDto;

    const leasingCompany = new LeasingCompany();

    leasingCompany.userName = userName;
    leasingCompany.inn = inn;
    leasingCompany.role = role;

    await leasingCompany.save();

    return leasingCompany;
  }
}
