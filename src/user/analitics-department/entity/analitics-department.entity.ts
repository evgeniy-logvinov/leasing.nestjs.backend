import { Employee } from 'src/user/employee/entity/employee.entity';
import { LeasingCompanyEmployees } from 'src/user/leasing-company-employees/entity/leasing-company-employees.entity';
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
export class AnaliticsDepartment extends LeasingBaseEntity {
  @OneToMany((type) => Employee, (employee) => employee.id, { eager: true })
  // @OneToMany((type) => Employee, (employee) => employee.id, { eager: true }, , { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'empoyee_id' })
  employees: Employee[];

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
