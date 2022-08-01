import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class BalanceHistoryThreeMonthDto {
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

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  previuosPreviousYear: string;
}
