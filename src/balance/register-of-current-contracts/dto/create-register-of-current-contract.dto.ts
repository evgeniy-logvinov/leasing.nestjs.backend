import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateRegisterOfCurrentContractDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  endDate: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  summOfAgreement: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  scopeOfWorkPerformed: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amountOfPaidWork: number;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
