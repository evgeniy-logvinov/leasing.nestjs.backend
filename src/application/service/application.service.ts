import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientNotFoundException } from 'src/handlers/errors/ClientNotFoundException';
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

    return {
      message: 'Application successfully created or updated!',
      id,
    };
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
      throw new ClientNotFoundException();
    }

    return await this.applicationRepository.find({
      where: { client: { id: clientId } },
    });
  }
}
