import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { SalesDepartment } from 'src/user/sales-department/entity/sales-department.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { CreateDateColumn, Entity, OneToMany } from 'typeorm';

@Entity()
export class LeasingCompanyEmployees extends LeasingBaseEntity {
  @OneToMany(
    (type) => AnaliticsDepartment,
    (analiticsDepartment) => analiticsDepartment.leasingCompanyEmployees,
    { eager: true },
  )
  analiticsDepartment: AnaliticsDepartment[];

  @OneToMany(
    (type) => SalesDepartment,
    (salesDepartment) => salesDepartment.leasingCompanyEmployees,
    { eager: true },
  )
  salesDepartment: SalesDepartment[];

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
