import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class ConfirmEmailDto {
  @ApiProperty({ description: 'UserId' })
  @IsUUID()
  id: string;
}
