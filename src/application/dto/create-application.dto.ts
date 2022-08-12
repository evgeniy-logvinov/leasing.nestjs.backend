import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, IsBoolean } from 'class-validator';

export class CreateApplicationDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isNew: boolean;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
