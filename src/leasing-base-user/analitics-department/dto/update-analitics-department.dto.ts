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
import { Employee } from 'src/leasing-base-user/employee/entity/employee.entity';

export class UpdateAnaliticsDepartmentDto {
  @ApiProperty()
  @IsUUID()
  // @MinLength(8)
  // @MaxLength(9)
  id: string;

  @ApiProperty()
  @IsArray()
  employees: Employee[];

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  headOfDepartment: string;
}
