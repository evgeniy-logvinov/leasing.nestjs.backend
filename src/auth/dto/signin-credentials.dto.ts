import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignInCredentialsDto {
  @ApiProperty({ minimum: 4, maximum: 20 })
  @IsEmail()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  email: string;

  @ApiProperty({
    minimum: 6,
    maximum: 20,
    description: 'At least 1 capital, 1 small, 1 special character & 1 number',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;

  // @Expose()
  //   @IsEmail()
  //   @IsNotEmpty()
  //   @ApiProperty({
  //       example: 'johndoe@gmail.com',
  //       description: 'Username',
  //   })
  //   username: string
}
