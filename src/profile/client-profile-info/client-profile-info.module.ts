import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileInfoRepository } from './profile-info/repository/profile-info.repository';
import { GuarantorProfileInfoRepository } from './guarantor-profile-info/repository/guarantor-profile-info.repository';
import { ClientProfileInfoRepository } from './client-profile-info/repository/client-profile-info.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileInfoRepository,
      GuarantorProfileInfoRepository,
      ClientProfileInfoRepository,
    ]),
  ],
  controllers: [],
  providers: [],
})
export class ProfileModule {}
