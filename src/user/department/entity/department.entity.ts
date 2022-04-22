import { Employee } from 'src/user/employee/entity/employee.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Department extends LeasingBaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany((type) => Employee, (employee) => employee.id, { eager: true })
  // @OneToMany((type) => Employee, (employee) => employee.id, { eager: true }, , { cascade: ['insert', 'update'] })
  @JoinColumn({ name: 'empoyee_id' })
  employees: Employee[];

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
