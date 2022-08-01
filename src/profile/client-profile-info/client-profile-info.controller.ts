import { Post, Body, ValidationPipe, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfileInfoDto } from './dto/create-profile-info.dto';
import { GetProfileInfoDto } from './dto/get-profile-info.dto copy';
import { ClientProfileInfo } from './entity/client-profile-info.entity';
import { ClientProfileInfoService } from './service/client-profile-info.service';

@ApiTags('ClientProfileInfo')
@Controller('client-profile-info')
export class ClientProfileInfoController {
  constructor(private clientProfileInfoService: ClientProfileInfoService) {}

  @Get()
  getProfile(
    @Body(ValidationPipe) getDto: GetProfileInfoDto,
  ): Promise<ClientProfileInfo> {
    console.log('createProfileDto', getDto);
    return this.clientProfileInfoService.getProfile(getDto.clientId);
  }

  @Post('/create')
  createProfile(
    @Body(ValidationPipe) createDto: CreateProfileInfoDto,
  ): Promise<{ message: string }> {
    console.log('createProfileDto', createDto);
    return this.clientProfileInfoService.setProfile(createDto);
  }
}
