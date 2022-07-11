import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class BalanceHistoryThreeMonths extends LeasingBaseEntity {
  @Column()
  currentYear: string;

  @Column()
  previousYear: string;

  @Column()
  previuosPreviousYear: string;
}
