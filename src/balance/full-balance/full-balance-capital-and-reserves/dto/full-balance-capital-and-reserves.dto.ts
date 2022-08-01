import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { BalanceHistoryThreeMonthDto } from 'src/balance/balance-history-three-months/dto/balance-history-three-months.dto';

export class FullBalanceCapitalAndReservesDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  authorizedCapital: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  ownShares: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  revalutionOfNonCurrentAssets: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  additionalCapital: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  reserveCapital: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  retainedEarnings: BalanceHistoryThreeMonthDto;
}
