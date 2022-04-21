import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LeasingCompanyDto {
  @ApiProperty()
  @IsNumber()
  // @MinLength(8)
  // @MaxLength(9)
  inn: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  userName: string;
}
