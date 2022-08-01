import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator';
import { FullBalanceActiveDto } from '../full-balance-active/dto/full-balance-active.dto';
import { FullBalancePassiveDto } from '../full-balance-passive/dto/full-balance-passive.dto';

export class CreateFullBalanceDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  active: FullBalanceActiveDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  passive: FullBalancePassiveDto;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
