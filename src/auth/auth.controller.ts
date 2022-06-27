import { Post, Body, ValidationPipe, Controller, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetUser } from './decorator/get-user.decorator';
import { ConfirmEmailDto } from './dto/confirm-email.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ResetRequiredDto } from './dto/reset-required.dto';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { User } from './entity/user.entity';
import { JwtPayload } from './interface/jwt-payload.interface';
import { AuthService } from './service/auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) signupCredentialsDto: SignupCredentialsDto,
  ): Promise<{ message: string }> {
    console.log('signupCredentialsDto', signupCredentialsDto);
    return this.authService.signUp(signupCredentialsDto);
  }

  @Post('/reset-required')
  resetPequired(
    @Body(ValidationPipe) resetRequiredDto: ResetRequiredDto,
  ): Promise<{ message: string }> {
    console.log('resetRequiredDto', resetRequiredDto);
    return this.authService.resetRequired(resetRequiredDto);
  }

  @Post('/reset-password')
  resetPassword(
    @Body(ValidationPipe) resetPasswordDto: ResetPasswordDto,
  ): Promise<{ message: string }> {
    console.log('resetPasswordDto', resetPasswordDto);
    return this.authService.resetPassword(resetPasswordDto);
  }

  @Post('/confirm-email')
  confirmEmail(
    @Body(ValidationPipe) confirmEmailDto: ConfirmEmailDto,
  ): Promise<{ message: string }> {
    console.log('confirmEmailDto', confirmEmailDto);
    return this.authService.confirmEmail(confirmEmailDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) signinCredentialsDto: SignInCredentialsDto,
  ): Promise<{ accessToken: string; user: JwtPayload }> {
    console.log('signinCredentialsDto', signinCredentialsDto);
    return this.authService.signIn(signinCredentialsDto);
  }
}
