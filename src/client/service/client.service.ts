import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDto } from '../dto/client.dto';
import { Client } from '../entity/client.entity';
import { ClientPayload } from '../interface/client-payload.interface';
import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async getAllClients(): Promise<ClientPayload[]> {
    return this.clientRepository.find();
  }

  async createClient(client: ClientDto): Promise<Client> {
    return this.clientRepository.createClient(client);
  }
}
