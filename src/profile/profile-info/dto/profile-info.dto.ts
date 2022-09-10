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
  IsUUID,
  IsOptional,
  IsNumberString,
} from 'class-validator';
import { AddressDto } from 'src/address/dto/address.dto';
import { FioDto } from 'src/fio/dto/fio.dto';
import { FounderDto } from 'src/founder/dto/founder.dto';

export class ProfileInfoDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  @IsString()
  site: string;

  // @ApiProperty()
  // @IsNumber()
  // @IsNotEmpty()
  // @MinLength(9)
  // @MaxLength(11)
  // inn: number;
  @ApiProperty({ minimum: 9, maximum: 11 })
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  @IsNumberString()
  inn: string;

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
  @IsNotEmpty()
  businessStartSameWithRegistration: boolean;

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  founders: FounderDto[];
}
