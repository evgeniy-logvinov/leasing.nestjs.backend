import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { Application } from '../entity/application.entity';
import { ApplicationRepository } from '../repository/application.repository';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(ApplicationRepository)
    private applicationRepository: ApplicationRepository,
  ) {}

  async create(
    applicationDto: CreateApplicationDto,
  ): Promise<{ message: string; id: string }> {
    const { id } = await this.applicationRepository.createApplication(
      applicationDto,
    );

    return { message: 'Application created', id };
  }
  // TODO: check fail case
  async getApplicationById(id: string): Promise<Application> {
    const application = await this.applicationRepository.findOneOrFail({
      where: { id },
    });

    return application;
  }

  async getAllApplicationsByClientId(clientId: string): Promise<Application[]> {
    if (!clientId) {
      throw new NotFoundException('Client id is empty');
    }

    return await this.applicationRepository.find({
      where: { client: { id: clientId } },
    });
  }
}
