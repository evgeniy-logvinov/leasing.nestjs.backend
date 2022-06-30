import { User } from 'src/user/entity/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ClientDto } from '../dto/client.dto';
import { Client } from '../entity/client.entity';
import { ClientPayload } from '../interface/client-payload.interface';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {
  async createClient(clientDto: ClientDto, user: User): Promise<Client> {
    const { userName, inn } = clientDto;

    const client = new Client();

    client.userName = userName;
    client.inn = inn;
    client.user = user;

    await client.save();

    return client;
  }

  // async getAllClients(): Promise<ClientPayload> {
  //   this.find
  // }
}
