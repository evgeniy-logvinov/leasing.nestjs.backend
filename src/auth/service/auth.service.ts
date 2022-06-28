import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfirmEmailDto } from 'src/user/dto/confirm-email.dto';
import { CreateAdminDto } from 'src/user/dto/create-admin.dto';
import { ResetPasswordDto } from 'src/user/dto/reset-password.dto';
import { ResetRequiredDto } from 'src/user/dto/reset-required.dto';
import { SignInCredentialsDto } from 'src/user/dto/signin-credentials.dto';
import { UserService } from 'src/user/service/user.service';
import { JwtPayload } from '../interface/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(createAdminDto: CreateAdminDto): Promise<{ message: string }> {
    const message = await this.signUpAdmin(createAdminDto);
    this.sendConfirmationEmail(message.id, createAdminDto.email);
    return message;
  }

  sendConfirmationEmail(userId: string, email: string): void {
    console.log(
      'confirmation link',
      email,
      `${process.env.BASE_URL_FE}${process.env.CONFIRM_PATH_FE}${userId}`,
    );
  }

  sendResetEmail(resetId: string, email: string): void {
    console.log(
      'reset link',
      email,
      `${process.env.BASE_URL_FE}${process.env.RESET_PASSWORD_PATH_FE}${resetId}`,
    );
  }

  async signUpAdmin(
    createAdminDto: CreateAdminDto,
  ): Promise<{ message: string; id: string }> {
    return this.userService.createAdmin(createAdminDto);
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
  ): Promise<{ message: string }> {
    return this.userService.resetPassword(resetPasswordDto);
  }

  async resetRequired(
    resetRequiredDto: ResetRequiredDto,
  ): Promise<{ message: string }> {
    const message = await this.userService.resetRequired(resetRequiredDto);
    this.sendResetEmail(message.resetId, resetRequiredDto.email);
    return message;
  }

  async confirmEmail(
    confirmEmailDto: ConfirmEmailDto,
  ): Promise<{ message: string }> {
    return this.userService.changeConfirmEmail(confirmEmailDto);
  }

  async signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{
    accessToken: string;
    user: JwtPayload;
    role: string;
    permissions: string[];
  }> {
    const payload = await this.userService.validateUserPassword(
      signInCredentialsDto,
    );
    const accessToken = await this.jwtService.sign(payload);

    return {
      accessToken,
      user: payload,
      permissions: payload.permissions,
      role: payload.role,
    };
  }
}
