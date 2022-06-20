import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { SignupCredentialsDto } from '../dto/signup-credentials.dto';
import { SignInCredentialsDto } from '../dto/signin-credentials.dto';
import { User } from '../entity/user.entity';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { LeasingAdmin } from 'src/leasing-base-user/admin/entity/leasing-admin.entity';
import { Role } from 'src/leasing-base-user/role/entity/role.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(
    signupCredentialsDto: SignupCredentialsDto,
    role: Role,
  ): Promise<{ message: string }> {
    const { email, password } = signupCredentialsDto;

    const user = new User();
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      const leasingBaseUser = new LeasingAdmin();
      leasingBaseUser.isAdmin = true;
      leasingBaseUser.role = role;
      await leasingBaseUser.save();

      user.leasingBaseUser = leasingBaseUser;
      await user.save();

      return { message: 'User successfully created !' };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    signinCredentialDto: SignInCredentialsDto,
  ): Promise<JwtPayload> {
    const { email, password } = signinCredentialDto;
    const auth = await this.findOne({ email });

    if (auth && (await auth.validatePassword(password))) {
      return {
        email: auth.email,
        leasingBaseUser: auth.leasingBaseUser,
      };
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    console.log(password, salt);
    return bcrypt.hash(password, salt);
  }
}
