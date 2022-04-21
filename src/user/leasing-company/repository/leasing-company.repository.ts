import { EntityRepository, Repository } from 'typeorm';
import { LeasingCompanyDto } from '../dto/leasing-company.dto';
import { LeasingCompany } from '../entity/leasing-company.entity';

@EntityRepository(LeasingCompany)
export class LeasingCompanyRepository extends Repository<LeasingCompany> {
  async createLeasingCompany(
    leasingCompanyDto: LeasingCompanyDto,
  ): Promise<LeasingCompany> {
    const { email, userName, inn } = leasingCompanyDto;

    const leasingCompany = new LeasingCompany();

    leasingCompany.userName = userName;
    leasingCompany.email = email;
    leasingCompany.inn = inn;

    await leasingCompany.save();

    return leasingCompany;
  }
}
