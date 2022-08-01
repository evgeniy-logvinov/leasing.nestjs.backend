import { Client } from 'src/user-info/client/entity/client.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class RegisterOfCurrentContracts extends LeasingBaseEntity {
  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  summOfAgreement: number;

  @Column()
  scopeOfWorkPerformed: number;

  @Column()
  amountOfPaidWork: number;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;
}
