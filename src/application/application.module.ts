import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { ApplicationController } from './application.controller';
import { ApplicationRepository } from './repository/application.repository';
import { ApplicationService } from './service/application.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationRepository])],
  controllers: [ApplicationController],
  // TODO: Try to remove client repository. Looks like we don't need it here
  providers: [ApplicationService, ClientRepository],
})
export class ApplicationModule {}
