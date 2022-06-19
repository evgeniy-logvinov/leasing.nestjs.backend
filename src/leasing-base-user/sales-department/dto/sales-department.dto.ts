import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MaxLength } from 'class-validator';
import { Region } from 'src/leasing-base-user/region/entity/region.entity';

export class SalesDepartmentDto {
  @ApiProperty()
  @IsString()
  @MaxLength(150)
  headOfDepartment: string;

  @ApiProperty()
  @IsArray()
  regions: Region[];
}
