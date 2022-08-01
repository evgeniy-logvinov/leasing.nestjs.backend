import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { BalanceHistoryThreeMonthDto } from 'src/balance/balance-history-three-months/dto/balance-history-three-months.dto';

export class FullBalanceLongTermLiabilitiesDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  borrowedFunds: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  defferedTaxLiabilities: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  estimatedLiabilities: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  otherLiabilities: BalanceHistoryThreeMonthDto;
}
