import { Post, Body, ValidationPipe, Controller, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
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

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) signinCredentialsDto: SignInCredentialsDto,
  ): Promise<{ accessToken: string; user: JwtPayload }> {
    console.log('signinCredentialsDto', signinCredentialsDto);
    return this.authService.signIn(signinCredentialsDto);
  }
}
