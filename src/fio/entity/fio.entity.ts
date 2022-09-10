import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class Fio extends LeasingBaseEntity {
  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  patronymic: string;
}
