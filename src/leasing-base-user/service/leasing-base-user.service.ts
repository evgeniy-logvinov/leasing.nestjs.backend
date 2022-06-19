import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../auth/entity/user.entity';
import { LeasingBaseUser } from '../entity/leasing-base-user.entity';
import { LeasingBaseUserRepository } from '../repository/leasing-base-user.repository';

@Injectable()
export class LeasingBaseUserService {
  constructor(
    @InjectRepository(LeasingBaseUserRepository)
    private userInfoRepository: LeasingBaseUserRepository,
  ) {}

  async getUser(user: User): Promise<LeasingBaseUser> {
    const userInfo = await this.userInfoRepository.findOne({
      where: { id: user.leasingBaseUser.id },
    });

    if (!userInfo) {
      throw new NotFoundException('User not found.');
    }
    return userInfo;
  }
}
