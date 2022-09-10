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
  async createApplication({
    isNew,
    clientId,
    id,
    brand,
    country,
    isReturnable,
    model,
    ndsPayer,
    releaseDate,
    subjectOfLeasing,
    typeOfSupplier,
  }: CreateApplicationDto): Promise<{ message: string; id: string }> {
    try {
      const client = await Client.findOneOrFail({
        where: { id: clientId },
      });

      // if (!client) {
      //   throw new NotFoundException('Client not found.');
      // }

      const application = await Application.findOne({
        where: { id },
      });
      application.isNew = isNew;
      application.client = client;
      application.isReturnable = isReturnable;
      application.country = country;
      application.brand = brand;
      application.typeOfSupplier = typeOfSupplier;
      application.subjectOfLeasing = subjectOfLeasing;
      application.releaseDate = releaseDate;
      application.ndsPayer = ndsPayer;
      application.model = model;
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
