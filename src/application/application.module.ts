import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { ApplicationController } from './application.controller';
import { ApplicationRepository } from './repository/application.repository';
import { ApplicationService } from './service/application.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationRepository])],
  controllers: [ApplicationController],
  providers: [ApplicationService, ClientRepository],
})
export class ApplicationModule {}
