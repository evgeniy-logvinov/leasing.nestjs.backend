import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { LeasingCompany } from 'src/user/leasing-company/entity/leasing-company.entity';
import { SalesDepartment } from 'src/user/sales-department/entity/sales-department.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class LeasingCompanyEmployees extends LeasingBaseEntity {
  @OneToOne((type) => LeasingCompany, { eager: true })
  @JoinColumn()
  leasingCompany: LeasingCompany;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
