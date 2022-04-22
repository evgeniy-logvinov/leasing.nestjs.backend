import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MaxLength } from 'class-validator';
import { Employee } from 'src/user/employee/entity/employee.entity';

export class DepartmentDto {
  @ApiProperty()
  @IsString()
  @MaxLength(150)
  name: string;

  @ApiProperty()
  @IsArray()
  employees: Employee[];
}
