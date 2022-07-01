import { User } from 'src/user/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LeasingCompanyDto } from '../dto/leasing-company.dto';
import { LeasingCompany } from '../entity/leasing-company.entity';
import { LeasingCompanyPayload } from '../interface/leasing-company-payload.interface';

@EntityRepository(LeasingCompany)
export class LeasingCompanyRepository extends Repository<LeasingCompany> {
  async createLeasingCompany(
    leasingCompanyDto: LeasingCompanyDto,
    user: User,
  ): Promise<LeasingCompany> {
    const { userName, inn } = leasingCompanyDto;

    const leasingCompany = new LeasingCompany();

    leasingCompany.userName = userName;
    leasingCompany.inn = inn;
    leasingCompany.user = user;

    await leasingCompany.save();

    return leasingCompany;
  }

  getAll(): Promise<LeasingCompanyPayload[]> {
    return this.createQueryBuilder('leasing_company')
      .leftJoinAndSelect('leasing_company.user', 'user')
      .select(['email', 'leasing_company.*'])
      .getRawMany();
  }

  getById(id: string): Promise<LeasingCompanyPayload> {
    return this.createQueryBuilder('leasing_company')
      .leftJoinAndSelect('leasing_company.user', 'user')
      .select(['email', 'leasing_company.*'])
      .where('leasing_company.id = :id', { id })
      .getRawOne();
  }
}
