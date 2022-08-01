import { Client } from 'src/user-info/client/entity/client.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { ReducedBalanceActive } from '../reduced-balance-active/entity/reduced-balance-active.entity';
import { ReducedBalancePassive } from '../reduced-balance-passive/entity/reduced-balance-passive.entity';

@Entity()
export class ReducedBalance extends LeasingBaseEntity {
  @OneToOne(() => ReducedBalanceActive, { eager: true })
  @JoinColumn()
  active: ReducedBalanceActive;

  @OneToOne(() => ReducedBalancePassive, { eager: true })
  @JoinColumn()
  passive: ReducedBalancePassive;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;
}
