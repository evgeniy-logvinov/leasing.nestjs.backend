import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/user-info/client/entity/client.entity';
import { CreateProfileInfoDto } from '../dto/create-profile-info.dto';
import { ClientProfileInfo } from '../entity/client-profile-info.entity';
import { ClientProfileInfoRepository } from '../repository/client-profile-info.repository';

@Injectable()
export class ClientProfileInfoService {
  constructor(
    @InjectRepository(ClientProfileInfoRepository)
    private clientProfileInfoRepository: ClientProfileInfoRepository,
  ) {}

  async create(
    clientProfileDto: CreateProfileInfoDto,
  ): Promise<{ message: string; id: string }> {
    const { id } = await this.clientProfileInfoRepository.createProfileInfo(
      clientProfileDto,
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
