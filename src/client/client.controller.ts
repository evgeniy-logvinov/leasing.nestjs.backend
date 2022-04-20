import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientDto } from './dto/client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entity/client.entity';
import { ClientPayload } from './interface/client-payload.interface';
import { ClientService } from './service/client.service';

@ApiTags('Client')
@ApiBearerAuth()
@Controller('client')
@UseGuards(AuthGuard())
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  getAllClients(): Promise<ClientPayload[]> {
    return this.clientService.getAllClients();
  }

  @Post()
  // TODO: check what it means
  @UsePipes(ValidationPipe)
  createClient(@Body() clientDto: ClientDto): Promise<Client> {
    return this.clientService.createClient(clientDto);
  }

  @Patch()
  updateClientById(@Body() clientDto: UpdateClientDto): Promise<ClientPayload> {
    return this.clientService.updateClient(clientDto);
  }
}
