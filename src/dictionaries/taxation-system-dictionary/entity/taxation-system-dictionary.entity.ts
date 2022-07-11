import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class TaxationSystemDictionary extends LeasingBaseEntity {
  @Column()
  name: string;
}
