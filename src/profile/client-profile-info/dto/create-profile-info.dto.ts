import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsBoolean,
  IsDefined,
  IsEnum,
  IsUUID,
} from 'class-validator';
import { GuarantorProfileInfoDto } from 'src/profile/guarantor-profile-info/dto/guarantor-profile-info.dto';
import { ProfileInfoDto } from 'src/profile/profile-info/dto/profile-info.dto';
import { GuarantorTypeEnum } from 'src/utils/entities/GuarantorTypeEnum';

export class CreateProfileInfoDto extends ProfileInfoDto {
  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  guaranteeOfGD: boolean;

  @ApiProperty({ enum: GuarantorTypeEnum, enumName: 'GuarantorTypeEnum' })
  @IsEnum(GuarantorTypeEnum)
  @IsDefined()
  @IsNotEmpty()
  type: GuarantorTypeEnum;

  @ApiProperty()
  @ValidateNested()
  @IsNotEmpty()
  guarantor: GuarantorProfileInfoDto;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;
}
