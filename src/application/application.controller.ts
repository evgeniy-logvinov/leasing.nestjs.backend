import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Application } from './entity/application.entity';
import { ApplicationService } from './service/application.service';

@ApiTags('Application')
@ApiBearerAuth()
@Controller('application')
@UseGuards(AuthGuard())
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @Get()
  get(@Body() clientId: string): Promise<Application> {
    return this.applicationService.getApplication(clientId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() applicationDto: CreateApplicationDto,
  ): Promise<{ message: string; id: string }> {
    return this.applicationService.setApplication(applicationDto);
  }
}
