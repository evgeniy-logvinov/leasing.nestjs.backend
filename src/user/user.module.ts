import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeasingUserInfoRepository } from 'src/user-info/repository/leasing-user-info.repository';
import { UserRepository } from './repository/user.repository';
import { RoleRepository } from './role/repository/role.repository';
import { RoleService } from './role/service/role.service';
import { UserService } from './service/user.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      RoleRepository,
      LeasingUserInfoRepository,
    ]),
  ],
  controllers: [],
  providers: [UserService, RoleService],
  exports: [UserService],
})
export class UserModule {}
