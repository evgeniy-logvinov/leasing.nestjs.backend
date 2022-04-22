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
import { EmployeeDto } from 'src/user/employee/dto/employee.dto';
import { Employee } from 'src/user/employee/entity/employee.entity';

export class UpdateDepartmentDto {
  @ApiProperty()
  @IsUUID()
  // @MinLength(8)
  // @MaxLength(9)
  id: string;

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  name: string;

  @ApiProperty()
  @IsArray()
  employees: Employee[];
}
