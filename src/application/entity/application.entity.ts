import { Client } from 'src/user-info/client/entity/client.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Application extends LeasingBaseEntity {
  @Column()
  isNew: boolean;

  @OneToOne(() => Client)
  @JoinColumn()
  client: Client;
}
