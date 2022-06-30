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
    return this.clientRepository
      .createQueryBuilder('client')
      .leftJoinAndSelect('client.user', 'user')
      .select(['email', 'client.*'])
      .getRawMany();
  }

  async createClient(client: ClientDto): Promise<Client> {
    const result = await this.userService.createClient(client);
    return await this.clientRepository.createClient(client, result.user);
  }

  async updateClient(clientDto: UpdateClientDto): Promise<Client> {
    const client = await this.getClientById(clientDto.id);
    client.description = clientDto.description;
    client.blocked = clientDto.blocked;
    client.invited = clientDto.invited;

    await client.save();

    return client;
  }

  async inviteClient(inviteClientDto: InviteClientDto): Promise<Client> {
    const client = await this.getClientById(inviteClientDto.id);
    client.invited = true;

    await client.save();

    // const resetInfo = await this.userService.resetRequired(client);
    // this.emailService.sendResetEmail(resetInfo.resetId, client.email);

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
