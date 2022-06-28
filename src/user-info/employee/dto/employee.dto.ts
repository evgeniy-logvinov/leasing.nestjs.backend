import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class EmployeeDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  firstName: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  lastName: string;

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(150)
  patronymic: string;
}
