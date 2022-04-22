import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { SalesDepartment } from 'src/user/sales-department/entity/sales-department.entity';

export class LeasingCompanyEmployeesDto {
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
