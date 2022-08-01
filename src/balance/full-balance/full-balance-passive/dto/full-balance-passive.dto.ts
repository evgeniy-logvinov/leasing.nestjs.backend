import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { FullBalanceCapitalAndReservesDto } from '../../full-balance-capital-and-reserves/dto/full-balance-capital-and-reserves.dto';
import { FullBalanceLongTermLiabilitiesDto } from '../../full-balance-long-term-liabilities/dto/full-balance-long-term-liabilities.dto';
import { FullBalanceShortTermLiabilitiesDto } from '../../full-balance-short-term-liabilities/dto/full-balance-short-term-liabilities.dto';

export class FullBalancePassiveDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  capitalAndReserves: FullBalanceCapitalAndReservesDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  longTermLiabilities: FullBalanceLongTermLiabilitiesDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  shortTermLiabilities: FullBalanceShortTermLiabilitiesDto;
}
