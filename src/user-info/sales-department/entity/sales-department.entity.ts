import { LeasingCompanyEmployees } from 'src/user-info/leasing-company-employees/entity/leasing-company-employees.entity';
import { Region } from 'src/user-info/region/entity/region.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class SalesDepartment extends LeasingBaseEntity {
  @OneToMany((type) => Region, (region) => region.salesDepartment, {
    eager: true,
  })
  // @OneToMany((type) => Employee, (employee) => employee.id, { eager: true }, , { cascade: ['insert', 'update'] })
  regions: Region[];

  @Column({ type: 'varchar' })
  headOfDepartment: string;

  @OneToOne((type) => LeasingCompanyEmployees, { eager: true })
  @JoinColumn()
  leasingCompanyEmployees: LeasingCompanyEmployees;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
