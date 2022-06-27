import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'src/leasing-base-user/role/repository/role.repository';
import { LeasingCompanyDto } from '../dto/leasing-company.dto';
import { UpdateLeasingCompanyDto } from '../dto/update-leasing-company.dto';
import { LeasingCompany } from '../entity/leasing-company.entity';
import { LeasingCompanyPayload } from '../interface/leasing-company-payload.interface';
import { LeasingCompanyRepository } from '../repository/leasing-company.repository';

@Injectable()
export class LeasingCompanyService {
  constructor(
    @InjectRepository(LeasingCompanyRepository)
    private leasingCompanyRepository: LeasingCompanyRepository,
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async getAllLeasingCompanies(): Promise<LeasingCompanyPayload[]> {
    return this.leasingCompanyRepository.find();
  }

  async createLeasingCompany(
    company: LeasingCompanyDto,
  ): Promise<LeasingCompany> {
    const role = await this.roleRepository.findOne({
      name: 'ROLE_LEASING_COMPANY',
    });
    if (!role) {
      throw new NotFoundException(`This ROLE_LEASING_COMPANY is not found`);
    }

    return this.leasingCompanyRepository.createLeasingCompany(company, role);
  }

  async updateLeasingCompany(
    leasingCompanyDto: UpdateLeasingCompanyDto,
  ): Promise<LeasingCompany> {
    const leasingCompany = await this.getLeasingCompanyById(
      leasingCompanyDto.id,
    );
    leasingCompany.description = leasingCompanyDto.description;
    leasingCompany.blocked = leasingCompanyDto.blocked;
    leasingCompany.invited = leasingCompanyDto.invited;
    leasingCompany.accreditation = leasingCompanyDto.accreditation;

    await leasingCompany.save();

    return leasingCompany;
  }

  async getLeasingCompanyById(id: string): Promise<LeasingCompany> {
    const todo = await this.leasingCompanyRepository.findOne({
      where: { id },
    });

    if (!todo) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return todo;
  }
}
