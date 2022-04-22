import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { Region } from 'src/user/region/entity/region.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Employee extends LeasingBaseEntity {
  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'patronymic', type: 'varchar' })
  patronymic: string;

  @ManyToOne((type) => Region, (region) => region.employees)
  // @JoinColumn({ name: 'region_id' })
  regions: Region;

  @ManyToOne(
    (type) => AnaliticsDepartment,
    (analiticsDepartment) => analiticsDepartment.employees,
  )
  // @JoinColumn({ name: 'analitics-department_id' })
  analiticsDepartment: AnaliticsDepartment;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
