import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client.controller';
import { ClientRepository } from './repository/client.repository';
import { ClientService } from './service/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRepository])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
