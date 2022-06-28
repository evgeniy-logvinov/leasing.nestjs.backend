import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { LeasingUserInfo } from '../entity/leasing-user-info.entity';
import { LeasingUserInfoRepository } from '../repository/leasing-user-info.repository';

@Injectable()
export class LeasingUserInfoService {
  constructor(
    @InjectRepository(LeasingUserInfoRepository)
    private userInfoRepository: LeasingUserInfoRepository,
  ) {}

  async getUser(user: User): Promise<LeasingUserInfo> {
    const userInfo = await this.userInfoRepository.findOne({
      where: { id: user.leasingUserInfo.id },
    });

    if (!userInfo) {
      throw new NotFoundException('User not found.');
    }
    return userInfo;
  }
}
