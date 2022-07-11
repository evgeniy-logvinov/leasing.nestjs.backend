import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';
import { FullBalanceActive } from '../full-balance-active/entity/full-balance-active.entity';
import { FullBalancePassive } from '../full-balance-passive/entity/full-balance-passive.entity';

@Entity()
export class FullBalance extends LeasingBaseEntity {
  @Column()
  active: FullBalanceActive;

  @Column()
  passive: FullBalancePassive;
}
