import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class BalanceHistoryTwoMonthDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currentYear: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  previousYear: string;
}
