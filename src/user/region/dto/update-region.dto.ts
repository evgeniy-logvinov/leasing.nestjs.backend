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
import { Employee } from 'src/user/employee/entity/employee.entity';

export class UpdateRegionDto {
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

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  headOfDepartment: string;
}
