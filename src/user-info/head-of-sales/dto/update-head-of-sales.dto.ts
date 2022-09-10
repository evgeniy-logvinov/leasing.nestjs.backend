import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { FioDto } from 'src/fio/dto/fio.dto';

export class UpdateClientDto {
  @ApiProperty()
  @IsUUID()
  @IsUUID()
  id: string;

  @ApiProperty({ minimum: 4, maximum: 50 })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mobilePhone: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  fio: FioDto;
}
