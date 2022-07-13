import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { ReducedBalanceActive } from '../reduced-balance-active/reduced-balance-active.entity';
import { ReducedBalancePassive } from '../reduced-balance-passive/reduced-balance-passive.entity';

@Entity()
export class ReducedBalance extends LeasingBaseEntity {
  @OneToOne(() => ReducedBalanceActive, { eager: true })
  @JoinColumn()
  active: ReducedBalanceActive;

  @OneToOne(() => ReducedBalancePassive, { eager: true })
  @JoinColumn()
  passive: ReducedBalancePassive;
}
