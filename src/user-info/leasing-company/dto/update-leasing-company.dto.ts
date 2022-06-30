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

export class UpdateLeasingCompanyDto {
  @ApiProperty()
  @IsUUID()
  // @MinLength(8)
  // @MaxLength(9)
  id: string;

  @ApiProperty()
  @IsNumber()
  @MinLength(9)
  @MaxLength(11)
  inn: string;

  @ApiProperty({ minimum: 4, maximum: 50 })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  userName: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  blocked: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  invited: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  accreditation: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(150)
  description: string;
}
