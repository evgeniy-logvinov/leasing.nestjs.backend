import { EntityRepository, Repository } from 'typeorm';
import { ClientDto } from '../dto/client.dto';
import { Client } from '../entity/client.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(clientDto: ClientDto): Promise<Client> {
    const { email, userName, inn } = clientDto;

    const client = new Client();

    client.userName = userName;
    client.email = email;
    client.inn = inn;

    await client.save();

    return client;
  }
}
