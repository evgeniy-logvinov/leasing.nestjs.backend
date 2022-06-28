import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/utils/entities';
import { Role } from '../entity/role.entity';
import { RoleRepository } from '../repository/role.repository';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async getRole(name: RoleEnum): Promise<Role> {
    const role = await this.roleRepository.findOne({ name });

    if (!role) {
      throw new NotFoundException(`This ROLE_ADMIN is not found`);
    }

    return role;
  }
}
