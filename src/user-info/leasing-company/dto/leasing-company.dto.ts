import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LeasingCompanyDto {
  @ApiProperty({ minimum: 9, maximum: 11 })
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  @IsNumberString()
  inn: string;

  @ApiProperty({ minimum: 4, maximum: 50 })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(150)
  userName: string;
}
