import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { Application } from '../entity/application.entity';
import { ApplicationRepository } from '../repository/application.repository';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(ApplicationRepository)
    private applicationRepository: ApplicationRepository,
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async setApplication(
    applicationDto: CreateApplicationDto,
  ): Promise<{ message: string; id: string }> {
    const client = await this.clientRepository.findOne({
      where: { id: applicationDto.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    let application = await this.applicationRepository.findOne({
      where: { clientId: client.id },
    });

    if (!application) {
      application = Application.create();
      application.client = client;
    }
    const { id } = await this.applicationRepository.createApplication(
      applicationDto,
      application,
    );

    return { message: 'Register of current contracts created', id };
  }

  async getApplication(clientId: string): Promise<Application> {
    const application = await this.applicationRepository.findOne({
      where: clientId,
    });

    if (!application) {
      throw new NotFoundException('Application not found.');
    }

    return application;
  }
}
