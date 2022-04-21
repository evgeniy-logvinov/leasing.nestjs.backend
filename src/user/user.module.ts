import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client/client.controller';
import { ClientRepository } from './client/repository/client.repository';
import { ClientService } from './client/service/client.service';
import { LeasingCompanyController } from './leasing-company/leasing-company.controller';
import { LeasingCompanyRepository } from './leasing-company/repository/leasing-company.repository';
import { LeasingCompanyService } from './leasing-company/service/leasing-company.service';
import { UserInfoRepository } from './repository/user-info.repository';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    TypeOrmModule.forFeature([
      UserInfoRepository,
      ClientRepository,
      LeasingCompanyRepository,
    ]),
  ],
  controllers: [UserController, ClientController, LeasingCompanyController],
  providers: [UserService, ClientService, LeasingCompanyService],
})
export class UserModule {}
