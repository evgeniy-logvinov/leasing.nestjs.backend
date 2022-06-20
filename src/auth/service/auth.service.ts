import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { LeasingBaseUserRepository } from 'src/leasing-base-user/repository/leasing-base-user.repository';
import { RoleRepository } from 'src/leasing-base-user/role/repository/role.repository';
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
    const role = await this.roleRepository.findOne({ name: 'ROLE_ADMIN' });
    if (!role) {
      throw new NotFoundException(`This ROLE_ADMIN is not found`);
    }

    return this.userRepository.signUp(signupCredentialsDto, role);
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
