import { Fio } from 'src/fio/entity/fio.entity';
import { LeasingUserInfo } from 'src/user-info/entity/leasing-user-info.entity';
import { ChildEntity, Column, JoinColumn, ManyToOne, Unique } from 'typeorm';

@ChildEntity()
export class HeadOfSales extends LeasingUserInfo {
  @ManyToOne(() => Fio)
  @JoinColumn()
  fio: Fio;

  @Column()
  phone: string;

  @Column()
  mobilePhone: string;
}
