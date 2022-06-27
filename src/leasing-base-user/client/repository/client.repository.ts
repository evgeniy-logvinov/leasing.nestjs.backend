import { Role } from 'src/leasing-base-user/role/entity/role.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ClientDto } from '../dto/client.dto';
import { Client } from '../entity/client.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(clientDto: ClientDto, role: Role): Promise<Client> {
    const { userName, inn } = clientDto;

    const client = new Client();

    client.userName = userName;
    client.inn = inn;
    client.role = role;

    await client.save();

    return client;
  }
}
