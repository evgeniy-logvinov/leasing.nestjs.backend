import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
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
import { Region } from 'src/leasing-base-user/region/entity/region.entity';

export class UpdateSalesDepartmentDto {
  @ApiProperty()
  @IsUUID()
  // @MinLength(8)
  // @MaxLength(9)
  id: string;

  @ApiProperty()
  @IsArray()
  regions: Region[];

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  headOfDepartment: string;
}
