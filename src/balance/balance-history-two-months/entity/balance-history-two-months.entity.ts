import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class BalanceHistoryTwoMonths extends LeasingBaseEntity {
  @Column()
  currentYear: string;

  @Column()
  previousYear: string;
}
