import { AnaliticsDepartment } from 'src/user/analitics-department/entity/analitics-department.entity';
import { SalesDepartment } from 'src/user/sales-department/entity/sales-department.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { CreateDateColumn, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class LeasingCompanyEmployees extends LeasingBaseEntity {
  @OneToMany(
    (type) => AnaliticsDepartment,
    (analiticsDepartment) => analiticsDepartment.id,
    { eager: true },
  )
  @JoinColumn({ name: 'analitics_department_id' })
  analiticsDepartment: AnaliticsDepartment[];

  @OneToMany(
    (type) => SalesDepartment,
    (salesDepartment) => salesDepartment.id,
    { eager: true },
  )
  @JoinColumn({ name: 'sales_department_id' })
  salesDepartment: SalesDepartment[];

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
