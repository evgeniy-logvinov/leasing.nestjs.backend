import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'src/auth/interface/jwt-payload.interface';
import { RoleEnum } from 'src/utils/entities';
import { ConfirmEmailDto } from '../dto/confirm-email.dto';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { ResetRequiredDto } from '../dto/reset-required.dto';
import { SignInCredentialsDto } from '../dto/signin-credentials.dto';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user.repository';
import { RoleService } from '../role/service/role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private roleService: RoleService,
  ) {}

  async createAdmin(
    adminDto: CreateAdminDto,
  ): Promise<{ message: string; id: string }> {
    const role = await this.roleService.getRole(RoleEnum.ROLE_ADMIN);
    return this.userRepository.createUserAdmin(adminDto, role);
  }

  async createClient(
    userDto: CreateUserDto,
  ): Promise<{ message: string; user: User }> {
    const role = await this.roleService.getRole(RoleEnum.ROLE_LEASING_CLIENT);
    return this.userRepository.createUser(userDto, role);
  }

  async createCompany(
    userDto: CreateUserDto,
  ): Promise<{ message: string; user: User }> {
    const role = await this.roleService.getRole(RoleEnum.ROLE_LEASING_COMPANY);
    return this.userRepository.createUser(userDto, role);
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
  ): Promise<{ message: string }> {
    return this.userRepository.resetPassword(resetPasswordDto);
  }

  async resetRequired(
    resetRequiredDto: ResetRequiredDto,
  ): Promise<{ message: string; resetId: string }> {
    return await this.userRepository.resetRequired(resetRequiredDto);
  }

  async changeConfirmEmail(
    confirmEmailDto: ConfirmEmailDto,
  ): Promise<{ message: string }> {
    return this.userRepository.changeConfirmEmail(confirmEmailDto);
  }

  async validateUserPassword(
    signInCredentialsDto: SignInCredentialsDto,
  ): Promise<JwtPayload> {
    const resp = await this.userRepository.validateUserPassword(
      signInCredentialsDto,
    );
    if (!resp) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return resp;
  }

  async findOneByEmail({ email }: { email: string }): Promise<User> {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new NotFoundException(`This user ${email} is not found`);
    }
    return user;
  }

  async findOneById({ id }: { id: string }): Promise<User> {
    const user = await this.userRepository.findOne({ id });

    if (!user) {
      throw new NotFoundException(`This user ${id} is not found`);
    }
    return user;
  }
}
