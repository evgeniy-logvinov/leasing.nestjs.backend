import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  MinLength,
  MaxLength,
  IsEnum,
  IsDefined,
} from 'class-validator';
import { FounderTypeEnum } from 'src/utils/entities';

export class FounderDto {
  @ApiProperty({ enum: FounderTypeEnum, enumName: 'FounderTypeEnum' })
  @IsEnum(FounderTypeEnum)
  @IsDefined()
  type: FounderTypeEnum;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @MinLength(9)
  @MaxLength(11)
  inn: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  businessShare: number;
}
