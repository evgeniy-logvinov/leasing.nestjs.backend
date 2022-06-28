import { Employee } from 'src/user-info/employee/entity/employee.entity';
import { LeasingCompanyEmployees } from 'src/user-info/leasing-company-employees/entity/leasing-company-employees.entity';
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
export class AnaliticsDepartment extends LeasingBaseEntity {
  @OneToMany((type) => Employee, (employee) => employee.analiticsDepartment, {
    eager: true,
  })
  // @OneToMany((type) => Employee, (employee) => employee.id, { eager: true }, , { cascade: ['insert', 'update'] })
  employees: Employee[];

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
