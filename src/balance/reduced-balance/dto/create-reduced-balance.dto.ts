import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { ReducedBalanceActive } from '../reduced-balance-active/entity/reduced-balance-active.entity';
import { ReducedBalancePassiveDto } from '../reduced-balance-passive/dto/reduced-balance-passive.dto';

export class CreateReducedBalanceDto {
  @ApiProperty()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  active: ReducedBalanceActive;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  passive: ReducedBalancePassiveDto;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
