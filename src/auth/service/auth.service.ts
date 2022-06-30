import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/services/email.service';
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
    private emailService: EmailService,
    private jwtService: JwtService,
  ) {}

  async signUp(createAdminDto: CreateAdminDto): Promise<{ message: string }> {
    const message = await this.signUpAdmin(createAdminDto);
    this.emailService.sendConfirmationEmail(message.id, createAdminDto.email);
    return message;
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
    this.emailService.sendResetEmail(message.resetId, resetRequiredDto.email);
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
