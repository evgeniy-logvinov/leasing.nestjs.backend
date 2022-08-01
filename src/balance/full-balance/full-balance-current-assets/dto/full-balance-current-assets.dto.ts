import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { BalanceHistoryThreeMonthDto } from 'src/balance/balance-history-three-months/dto/balance-history-three-months.dto';

export class FullBalanceCurrentAssetsDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  reserves: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  ndcAcquiredValuables: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  accountsReceivable: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  finInvestmentsExcludingCashEquivalents: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  cashAndCashEquivalents: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  otherCurrentAssets: BalanceHistoryThreeMonthDto;
}
