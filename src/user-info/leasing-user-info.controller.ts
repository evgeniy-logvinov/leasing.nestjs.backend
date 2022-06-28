import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/entity/user.entity';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { LeasingUserInfo } from './entity/leasing-user-info.entity';

import { LeasingUserInfoService } from './service/leasing-user-info.service';

// < -- Swagger Implementation Start -- >
@ApiTags('LeasingUser')
@ApiBearerAuth()
// < -- Swagger Implementation End -- >
@Controller('leasing-user')
@UseGuards(AuthGuard())
export class LeasingUserInfoController {
  constructor(private leasingUserInfoService: LeasingUserInfoService) {}

  @Get()
  getUserInfo(@GetUser() user: User): Promise<LeasingUserInfo> {
    return this.leasingUserInfoService.getUser(user);
  }
}
