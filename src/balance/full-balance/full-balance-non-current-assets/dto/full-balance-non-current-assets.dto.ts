import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { BalanceHistoryThreeMonthDto } from 'src/balance/balance-history-three-months/dto/balance-history-three-months.dto';

export class FullBalanceNonCurrentAssetsDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  nonMaterialAssets: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  researchAndDevelopmentResults: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  nonMaterialSearchAssets: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  basicAssets: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  profitableInvestmentsInMaterialAssets: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  financialInvestments: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  defferedTaxAssets: BalanceHistoryThreeMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  otherNonCurrentAssets: BalanceHistoryThreeMonthDto;
}
