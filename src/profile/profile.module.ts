import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileInfoRepository } from './profile-info/repository/profile-info.repository';
import { GuarantorProfileInfoRepository } from './guarantor-profile-info/repository/guarantor-profile-info.repository';
import { ClientProfileInfoRepository } from './client-profile-info/repository/client-profile-info.repository';
import { ClientProfileInfoController } from './client-profile-info/client-profile-info.controller';
import { ClientProfileInfoService } from './client-profile-info/service/client-profile-info.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProfileInfoRepository,
      GuarantorProfileInfoRepository,
      ClientProfileInfoRepository,
    ]),
  ],
  controllers: [ClientProfileInfoController],
  providers: [ClientProfileInfoService],
})
export class ProfileModule {}
