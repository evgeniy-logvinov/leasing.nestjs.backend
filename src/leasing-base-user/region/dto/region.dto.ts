import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, MaxLength } from 'class-validator';
import { Employee } from 'src/leasing-base-user/employee/entity/employee.entity';

export class RegionDto {
  @ApiProperty()
  @IsString()
  @MaxLength(150)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  headOfDepartment: string;

  @ApiProperty()
  @IsArray()
  employees: Employee[];
}
