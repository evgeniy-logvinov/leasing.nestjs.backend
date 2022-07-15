import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsBoolean,
  IsArray,
  ArrayMinSize,
  IsDate,
  IsDateString,
  IsUrl,
} from 'class-validator';
import { AddressDto } from 'src/address/dto/address.dro';
import { FioDto } from 'src/fio/dto/fio.dto';
import { FounderDto } from 'src/founder/dto/founder.dto';

export class ProfileInfoDto {
  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  @IsString()
  site: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(11)
  inn: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(14)
  ogrn: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(10)
  kpp: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  shortName: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  actualAddress: AddressDto;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  actualSameWithLegal: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  legalAddress: AddressDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  postAddress: AddressDto;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  postSameWithLegal: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  postSameWithActual: boolean;

  @ApiProperty({ minimum: 4, maximum: 50 })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(50)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  generalManager: FioDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @ValidateNested()
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  taxationSystemId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mainActivityByOkvdId: string;

  @ApiProperty()
  @IsString()
  @IsArray()
  @ArrayMinSize(1)
  actualActivityByOkvdIds: string[];

  @ApiProperty()
  @IsDate()
  @IsDateString()
  @IsNotEmpty()
  registrationDate: string;

  @ApiProperty()
  @IsDate()
  @IsDateString()
  @IsNotEmpty()
  businessStartDate: string;

  @ApiProperty()
  @IsBoolean()
  businessStartSameWithRegistration: boolean;

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  founders: FounderDto[];
}
