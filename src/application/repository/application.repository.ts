import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Client } from 'src/user-info/client/entity/client.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { Application } from '../entity/application.entity';

@EntityRepository(Application)
export class ApplicationRepository extends Repository<Application> {
  async createApplication(
    { isNew, clientId }: CreateApplicationDto,
    application: Application,
  ): Promise<{ message: string; id: string }> {
    const client = await Client.findOne({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    try {
      application.isNew = isNew;
      application.client = client;
      await application.save();
      return {
        message: 'Application successfully created!',
        id: application.id,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
