import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { FullBalanceCurrentAssetsDto } from '../../full-balance-current-assets/dto/full-balance-current-assets.dto';
import { FullBalanceNonCurrentAssetsDto } from '../../full-balance-non-current-assets/dto/full-balance-non-current-assets.dto';

export class FullBalanceActiveDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  nonCurrentAssets: FullBalanceNonCurrentAssetsDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  currentAssets: FullBalanceCurrentAssetsDto;
}
