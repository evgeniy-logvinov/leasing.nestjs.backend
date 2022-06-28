import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateEmployeeDto {
  @ApiProperty()
  @IsUUID()
  // @MinLength(8)
  // @MaxLength(9)
  id: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  firstName: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  lastName: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  patronymic: string;
}
