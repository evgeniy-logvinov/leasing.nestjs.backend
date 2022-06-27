import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LeasingBaseUserRepository } from 'src/leasing-base-user/repository/leasing-base-user.repository';
import { RoleRepository } from 'src/leasing-base-user/role/repository/role.repository';
import { ConfirmEmailDto } from '../dto/confirm-email.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { ResetRequiredDto } from '../dto/reset-required.dto';
import { SignInCredentialsDto } from '../dto/signin-credentials.dto';
import { SignupCredentialsDto } from '../dto/signup-credentials.dto';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private leasingBaseUserRepository: LeasingBaseUserRepository,
    private roleRepository: RoleRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(
    signupCredentialsDto: SignupCredentialsDto,
  ): Promise<{ message: string }> {
    const message = await this.signUpAdmin(signupCredentialsDto);
    this.sendConfirmationEmail(message.id, signupCredentialsDto.email);
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
    signupCredentialsDto: SignupCredentialsDto,
  ): Promise<{ message: string; id: string }> {
    const role = await this.roleRepository.findOne({ name: 'ROLE_ADMIN' });
    if (!role) {
      throw new NotFoundException(`This ROLE_ADMIN is not found`);
    }

    return this.userRepository.signUp(signupCredentialsDto, role);
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
  ): Promise<{ message: string }> {
    return this.userRepository.resetPassword(resetPasswordDto);
  }

  async resetRequired(
    resetRequiredDto: ResetRequiredDto,
  ): Promise<{ message: string }> {
    const message = await this.userRepository.resetRequired(resetRequiredDto);
    this.sendResetEmail(message.resetId, resetRequiredDto.email);
    return message;
  }

  async confirmEmail(
    confirmEmailDto: ConfirmEmailDto,
  ): Promise<{ message: string }> {
    return this.userRepository.confirmEmail(confirmEmailDto);
  }

  async signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{
    accessToken: string;
    user: JwtPayload;
    role: string;
    permissions: string[];
  }> {
    const resp = await this.userRepository.validateUserPassword(
      signInCredentialsDto,
    );
    if (!resp) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = resp;
    const accessToken = await this.jwtService.sign(payload);
    const leasingUser = await this.leasingBaseUserRepository.findOne({
      where: { id: payload.leasingBaseUser.id },
    });

    return {
      accessToken,
      user: resp,
      permissions: leasingUser.role.permissions.map((perm) => perm.name),
      role: leasingUser.role.name,
    };
  }
}
