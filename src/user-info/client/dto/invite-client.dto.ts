import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class InviteClientDto {
  @ApiProperty()
  @IsUUID()
  id: string;
}
