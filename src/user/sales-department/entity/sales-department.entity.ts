import { LeasingCompanyEmployees } from 'src/user/leasing-company-employees/entity/leasing-company-employees.entity';
import { Region } from 'src/user/region/entity/region.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class SalesDepartment extends LeasingBaseEntity {
  @OneToMany((type) => Region, (region) => region.id, { eager: true })
  // @OneToMany((type) => Employee, (employee) => employee.id, { eager: true }, , { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'region_id' })
  regions: Region[];

  @Column({ type: 'varchar' })
  headOfDepartment: string;

  @ManyToOne(
    (type) => LeasingCompanyEmployees,
    (leasingCompanyEmployees) => leasingCompanyEmployees.id,
  )
  leasingCompanyEmployees: LeasingCompanyEmployees;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
