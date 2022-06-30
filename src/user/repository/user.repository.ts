import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../entity/user.entity';
import { Role } from '../role/entity/role.entity';
import { JwtPayload } from 'src/auth/interface/jwt-payload.interface';
import { CreateAdminDto } from '../dto/create-admin.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { ResetRequiredDto } from '../dto/reset-required.dto';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { ConfirmEmailDto } from '../dto/confirm-email.dto';
import { SignInCredentialsDto } from '../dto/signin-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUserAdmin(
    userInfo: CreateAdminDto,
    role: Role,
  ): Promise<{ message: string; id: string }> {
    const { email, password } = userInfo;

    try {
      const user = new User();
      user.email = email;
      user.salt = await bcrypt.genSalt();
      user.password = await this.hashPassword(password, user.salt);
      user.role = role;

      await user.save();

      return { message: 'User successfully created !', id: user.id };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      }

      throw new InternalServerErrorException();
    }
  }

  async createUser(
    createUserDto: CreateUserDto,
    role: Role,
  ): Promise<{ message: string; user: User }> {
    const { email } = createUserDto;

    try {
      const user = new User();
      user.email = email;
      user.role = role;

      await user.save();

      return { message: 'User successfully created !', user };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      }

      throw new InternalServerErrorException();
    }
  }

  async resetRequired(
    resetRequiredDto: ResetRequiredDto,
  ): Promise<{ message: string; resetId: string }> {
    const { email } = resetRequiredDto;
    const user = await this.findOne({
      where: { email },
    });

    if (!user) {
      throw new ConflictException(`This email: ${email} is not found.`);
    }

    try {
      user.resetPasswordId = uuidv4();

      await user.save();

      return { message: 'Password reset!', resetId: user.resetPasswordId };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async resetPassword(
    resetPassword: ResetPasswordDto,
  ): Promise<{ message: string }> {
    const { password, id } = resetPassword;
    const user = await this.findOne({
      where: { resetPasswordId: id },
    });

    if (!user) {
      throw new NotFoundException(`This reset request ${id} is not found`);
    }

    try {
      user.salt = await bcrypt.genSalt();
      user.password = await this.hashPassword(password, user.salt);

      await user.save();

      return { message: 'Password reset!' };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async changeConfirmEmail(
    confirmEmailDto: ConfirmEmailDto,
  ): Promise<{ message: string }> {
    const { id } = confirmEmailDto;

    const user = await this.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`This user ${id} not exists`);
    }

    if (user.isEmailConfirmed) {
      // TODO: Show message if already confirmed
      return { message: 'Email already confirmed!' };
    }

    try {
      user.isEmailConfirmed = true;

      await user.save();

      return { message: 'Email confirmed!' };
    } catch (error) {
      throw new InternalServerErrorException();
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
        role: auth.role.name,
        permissions: auth.role.permissions.map((perm) => perm.name),
      };
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
