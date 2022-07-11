import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class OkvdDictionary extends LeasingBaseEntity {
  @Column()
  name: string;

  @Column()
  code: number;
}
