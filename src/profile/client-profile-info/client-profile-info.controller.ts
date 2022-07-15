import { Post, Body, ValidationPipe, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfileInfoDto } from './dto/create-profile-info.dto';
import { ClientProfileInfoService } from './service/client-profile-info.service';

@ApiTags('ClientProfileInfo')
@Controller('client-profile-info')
export class ClientProfileInfoController {
  constructor(private clientProfileInfoService: ClientProfileInfoService) {}

  @Post('/create')
  createProfile(
    @Body(ValidationPipe) createDto: CreateProfileInfoDto,
  ): Promise<{ message: string }> {
    console.log('createProfileDto', createDto);
    return this.clientProfileInfoService.setProfile(createDto);
  }
}
