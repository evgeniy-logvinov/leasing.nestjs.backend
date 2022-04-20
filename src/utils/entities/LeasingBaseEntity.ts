import { BaseEntity, Generated, PrimaryGeneratedColumn } from 'typeorm';

export class LeasingBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;
}
