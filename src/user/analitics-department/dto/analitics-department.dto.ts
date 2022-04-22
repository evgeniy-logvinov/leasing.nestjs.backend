import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MaxLength } from 'class-validator';
import { Employee } from 'src/user/employee/entity/employee.entity';

export class AnaliticsDepartmentDto {
  @ApiProperty()
  @IsString()
  @MaxLength(150)
  headOfDepartment: string;

  @ApiProperty()
  @IsArray()
  employees: Employee[];
}
