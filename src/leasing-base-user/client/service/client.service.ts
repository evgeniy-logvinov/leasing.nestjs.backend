import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientDto } from '../dto/client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
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

  async updateClient(clientDto: UpdateClientDto): Promise<Client> {
    const client = await this.getClientById(clientDto.id);
    client.description = clientDto.description;
    client.blocked = clientDto.blocked;
    client.invited = clientDto.invited;

    await client.save();

    return client;
  }

  async getClientById(id: string): Promise<Client> {
    const client = await this.clientRepository.findOne({
      where: { id },
    });

    if (!client) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return client;
  }
}
