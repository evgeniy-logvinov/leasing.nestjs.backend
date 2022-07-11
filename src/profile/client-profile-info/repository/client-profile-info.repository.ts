import { EntityRepository, Repository } from 'typeorm';
import { ClientProfileInfo } from '../entity/client-profile-info.entity';

@EntityRepository(ClientProfileInfo)
export class ClientProfileInfoRepository extends Repository<ClientProfileInfo> {}
