import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { User } from '../auth/entity/user.entity';
import { LeasingBaseUser } from './entity/leasing-base-user.entity';

import { LeasingBaseUserService } from './service/leasing-base-user.service';

// < -- Swagger Implementation Start -- >
@ApiTags('LeasingUser')
@ApiBearerAuth()
// < -- Swagger Implementation End -- >
@Controller('leasing-user')
@UseGuards(AuthGuard())
export class LeasingBaseUserController {
  constructor(private leasingBaseUserService: LeasingBaseUserService) {}

  @Get()
  getUserInfo(@GetUser() user: User): Promise<LeasingBaseUser> {
    return this.leasingBaseUserService.getUser(user);
  }
}
