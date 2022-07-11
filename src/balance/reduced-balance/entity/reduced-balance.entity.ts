import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';
import { ReducedBalanceActive } from '../reduced-balance-active/reduced-balance-active.entity';
import { ReducedBalancePassive } from '../reduced-balance-passive/reduced-balance-passive.entity';

@Entity()
export class ReducedBalance extends LeasingBaseEntity {
  @Column()
  active: ReducedBalanceActive;

  @Column()
  passive: ReducedBalancePassive;
}
