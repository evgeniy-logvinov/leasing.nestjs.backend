import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { BalanceHistoryTwoMonthDto } from 'src/balance/balance-history-two-months/dto/balance-history-two-months.dto';

export class CreateProfitAndLossStatementDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  revenue: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  costOfSales: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  grossProfit: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  commercialExpenses: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  managementExpenses: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  profitFromSales: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  incomeFromParticipation: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  interestReceivable: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  interestPayable: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  otherIncome: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  otherExpenses: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  profitBeforeTax: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  currentIncomeTax: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  changeInDeferredTaxLiabilities: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  changeInDeferredTaxAssets: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  other: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  netProfit: BalanceHistoryTwoMonthDto;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
