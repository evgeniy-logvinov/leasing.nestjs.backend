import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsOptional,
} from 'class-validator';

// TODO: make strings size
export class AddressDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  index: number;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  regionId: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  cityId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  house: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  corpus: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  building: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  litera: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  number: string;
}
