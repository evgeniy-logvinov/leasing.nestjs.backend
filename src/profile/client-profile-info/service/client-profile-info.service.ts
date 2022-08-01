import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from 'src/user-info/client/repository/client.repository';
import { CreateProfileInfoDto } from '../dto/create-profile-info.dto';
import { ClientProfileInfo } from '../entity/client-profile-info.entity';
import { ClientProfileInfoRepository } from '../repository/client-profile-info.repository';

@Injectable()
export class ClientProfileInfoService {
  constructor(
    @InjectRepository(ClientProfileInfoRepository)
    private clientProfileInfoRepository: ClientProfileInfoRepository,
    @InjectRepository(ClientRepository)
    private clientRepository: ClientRepository,
  ) {}

  async setProfile(
    clientProfileDto: CreateProfileInfoDto,
  ): Promise<{ message: string; id: string }> {
    const client = await this.clientRepository.findOne({
      where: { id: clientProfileDto.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    let clientInfoProfile = await this.clientProfileInfoRepository.findOne({
      where: { clientId: client.id },
    });

    if (!clientInfoProfile) {
      clientInfoProfile = ClientProfileInfo.create();
      clientInfoProfile.client = client;
    }
    const { id } = await this.clientProfileInfoRepository.createProfileInfo(
      clientProfileDto,
      clientInfoProfile,
    );

    return { message: 'Client profile info created', id };
  }

  async getProfile(clientId: string): Promise<ClientProfileInfo> {
    const clientProfileInfo = await this.clientProfileInfoRepository.findOne({
      where: clientId,
    });

    if (!clientProfileInfo) {
      throw new NotFoundException('Client profile info not found.');
    }

    return clientProfileInfo;
  }
}
