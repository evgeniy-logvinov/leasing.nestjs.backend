import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { SalesDepartment } from 'src/user/sales-department/entity/sales-department.entity';

export class UpdateLeasingCompanyEmployeesDto {
  @ApiProperty()
  @IsUUID()
  // @MinLength(8)
  // @MaxLength(9)
  id: string;

  @ApiProperty()
  @IsArray()
  // @MinLength(8)
  // @MaxLength(9)
  analiticsDepartment: AnaliticsDepartment[];

  @ApiProperty()
  @IsArray()
  // @MinLength(8)
  // @MaxLength(9)
  salesDepartment: SalesDepartment[];
}
