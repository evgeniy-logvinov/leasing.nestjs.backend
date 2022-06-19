import { Employee } from 'src/leasing-base-user/employee/entity/employee.entity';
import { SalesDepartment } from 'src/leasing-base-user/sales-department/entity/sales-department.entity';
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
export class Region extends LeasingBaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany((type) => Employee, (employee) => employee.regions, {
    eager: true,
  })
  // @OneToMany((type) => Employee, (employee) => employee.id, { eager: true }, , { cascade: ['insert', 'update'] })
  employees: Employee[];

  @ManyToOne(
    (type) => SalesDepartment,
    (salesDepartment) => salesDepartment.regions,
  )
  @JoinColumn({ name: 'region_id' })
  salesDepartment: SalesDepartment;

  @Column({ type: 'varchar' })
  headOfDepartment: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
