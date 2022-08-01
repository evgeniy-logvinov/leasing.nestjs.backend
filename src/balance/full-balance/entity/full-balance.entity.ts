import { Client } from 'src/user-info/client/entity/client.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { FullBalanceActive } from '../full-balance-active/entity/full-balance-active.entity';
import { FullBalancePassive } from '../full-balance-passive/entity/full-balance-passive.entity';

@Entity()
export class FullBalance extends LeasingBaseEntity {
  @OneToOne(() => FullBalanceActive, { eager: true })
  @JoinColumn()
  active: FullBalanceActive;

  @OneToOne(() => FullBalancePassive, { eager: true })
  @JoinColumn()
  passive: FullBalancePassive;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;
}
