import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'src/leasing-base-user/role/repository/role.repository';
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
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async getAllClients(): Promise<ClientPayload[]> {
    return this.clientRepository.find();
  }

  async createClient(client: ClientDto): Promise<Client> {
    const role = await this.roleRepository.findOne({
      name: 'ROLE_LEASING_CLIENT',
    });
    if (!role) {
      throw new NotFoundException(`This ROLE_LEASING_CLIENT is not found`);
    }

    return this.clientRepository.createClient(client, role);
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
