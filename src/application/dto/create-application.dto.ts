import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsUUID,
  IsBoolean,
  IsOptional,
  IsDefined,
  IsEnum,
  IsString,
  IsDateString,
} from 'class-validator';
import { TypeOfLeasingSubjectEnum } from 'src/utils/entities/TypeOfLeasingSubjectEnum';
import { TypeOfSupplierEnum } from 'src/utils/entities/TypeOfSupplierEnum';

export class CreateApplicationDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isNew: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isReturnable: boolean;

  @ApiProperty({
    enum: TypeOfLeasingSubjectEnum,
    enumName: 'TypeOfLeasingSubjectEnum',
  })
  @IsEnum(TypeOfLeasingSubjectEnum)
  @IsDefined()
  @IsNotEmpty()
  subjectOfLeasing: TypeOfLeasingSubjectEnum;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty()
  // TODO: have a look how it works on FE
  // @Transform((value) => new Date(value))
  // For optional values
  // @Transform((value) => value && new Date(value))
  @IsDateString()
  @IsNotEmpty()
  releaseDate: Date;

  @ApiProperty({ enum: TypeOfSupplierEnum, enumName: 'TypeOfCommitmentEnum' })
  @IsEnum(TypeOfSupplierEnum)
  @IsDefined()
  @IsNotEmpty()
  typeOfSupplier: TypeOfSupplierEnum;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  ndsPayer: boolean;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
