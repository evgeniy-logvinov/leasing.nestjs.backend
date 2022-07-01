import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmailService } from 'src/email/services/email.service';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/service/user.service';
import { ClientDto } from '../dto/client.dto';
import { InviteClientDto } from '../dto/invite-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { Client } from '../entity/client.entity';
import { ClientPayload } from '../interface/client-payload.interface';
import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
    private userService: UserService,
    private emailService: EmailService,
  ) {}

  getAllClients(): Promise<ClientPayload[]> {
    return this.clientRepository.getAll();
  }

  async createClient(client: ClientDto): Promise<Client> {
    const result = await this.userService.createClient(client);
    return this.clientRepository.createClient(client, result.user);
  }

  async updateClient(clientDto: UpdateClientDto): Promise<ClientPayload> {
    const client = await this.getClientById(clientDto.id);
    client.description = clientDto.description;
    client.blocked = clientDto.blocked;

    await client.save();

    return this.clientRepository.getById(client.id);
  }

  async inviteClient(inviteClientDto: InviteClientDto): Promise<ClientPayload> {
    const client = await this.getClientById(inviteClientDto.id);
    client.invited = true;

    await client.save();

    const user = await this.userService.findOneById({ id: client.user.id });
    const resetRequired = await this.userService.resetRequired(user);
    this.emailService.sendInviteEmail(resetRequired.resetId, user.email);

    return this.clientRepository.getById(client.id);
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
