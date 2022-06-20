import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionRepository } from './repository/permission.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PermissionRepository])],
  controllers: [],
})
export class PermissionModule {}
