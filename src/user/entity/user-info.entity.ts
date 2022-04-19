import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pet_name', type: 'varchar', nullable: true })
  petName: string;

  @Column({ type: 'varchar', nullable: true })
  photo: string;

  @Column({ name: 'modified_photo', type: 'varchar', nullable: true })
  modifiedPhoto: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;
}
