import { InternalServerErrorException } from '@nestjs/common';
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
      const application = await this.save({
        id,
        isNew,
        client: { id: clientId },
        isReturnable,
        country,
        brand,
        typeOfSupplier,
        subjectOfLeasing,
        releaseDate,
        ndsPayer,
        model,
      });

      return {
        message: 'Application successfully created or updated!',
        id: application.id,
      };
    } catch (error) {
      // TODO: Handler global where we catch 500 error
      throw new InternalServerErrorException();
    }
  }
}
