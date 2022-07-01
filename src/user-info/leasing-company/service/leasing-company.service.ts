import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailService } from 'src/email/services/email.service';
import { UserService } from 'src/user/service/user.service';
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
    private userService: UserService,
    private emailService: EmailService,
  ) {}

  async getAllLeasingCompanies(): Promise<LeasingCompanyPayload[]> {
    return this.leasingCompanyRepository.getAll();
  }

  async createLeasingCompany(
    company: LeasingCompanyDto,
  ): Promise<LeasingCompany> {
    const result = await this.userService.createCompany(company);
    return this.leasingCompanyRepository.createLeasingCompany(
      company,
      result.user,
    );
  }

  async updateLeasingCompany(
    leasingCompanyDto: UpdateLeasingCompanyDto,
  ): Promise<LeasingCompanyPayload> {
    const leasingCompany = await this.getLeasingCompanyById(
      leasingCompanyDto.id,
    );
    leasingCompany.description = leasingCompanyDto.description;
    leasingCompany.blocked = leasingCompanyDto.blocked;
    leasingCompany.accreditation = leasingCompanyDto.accreditation;

    await leasingCompany.save();

    return this.leasingCompanyRepository.getById(leasingCompany.id);
  }

  async inviteCompany(
    leasingCompanyDto: UpdateLeasingCompanyDto,
  ): Promise<LeasingCompanyPayload> {
    const company = await this.getLeasingCompanyById(leasingCompanyDto.id);
    company.invited = true;

    await company.save();

    const user = await this.userService.findOneById({ id: company.user.id });
    const resetRequired = await this.userService.resetRequired(user);
    this.emailService.sendInviteEmail(resetRequired.resetId, user.email);

    return this.leasingCompanyRepository.getById(company.id);
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
