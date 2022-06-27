import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '../role/repository/role.repository';
import { ClientController } from './client.controller';
import { ClientRepository } from './repository/client.repository';
import { ClientService } from './service/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRepository, RoleRepository])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
