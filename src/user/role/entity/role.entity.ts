import { Permission } from '../../permission/entity/permission.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEnum } from 'src/utils/entities';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: RoleEnum,
    default: RoleEnum.ROLE_ADMIN,
  })
  name: RoleEnum;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;

  @ManyToMany(() => Permission, {
    eager: true,
  })
  @JoinTable()
  permissions: Permission[];
}
