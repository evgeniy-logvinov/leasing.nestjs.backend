import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationController } from './application.controller';
import { ApplicationRepository } from './repository/application.repository';
import { ApplicationService } from './service/application.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationRepository])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
