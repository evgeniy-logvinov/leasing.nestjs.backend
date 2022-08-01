import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsUUID,
} from 'class-validator';
import { TypeDebtBurdenEnum } from 'src/utils/entities/TypeDebtBurdenEnum';
import { TypeOfCommitmentEnum } from 'src/utils/entities/TypeOfCommitmentEnum';

export class CreateDebtBurdenDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty({ enum: TypeOfCommitmentEnum, enumName: 'TypeOfCommitmentEnum' })
  @IsEnum(TypeOfCommitmentEnum)
  @IsDefined()
  typeOfCommitment: TypeOfCommitmentEnum;

  @ApiProperty({ enum: TypeDebtBurdenEnum, enumName: 'TypeDebtBurdenEnum' })
  @IsEnum(TypeDebtBurdenEnum)
  @IsDefined()
  typeDebtBurden: TypeDebtBurdenEnum;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  issueDate: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  summ: number;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  maturityDate: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  remainingMaturityDate: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  averageMonthlyPayment: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  balanceAtLastReportingDate: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  balanceAsOfCurrentDate: number;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
