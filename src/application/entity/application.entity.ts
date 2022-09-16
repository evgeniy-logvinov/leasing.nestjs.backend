import { Client } from 'src/user-info/client/entity/client.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { TypeOfLeasingSubjectEnum } from 'src/utils/entities/TypeOfLeasingSubjectEnum';
import { TypeOfSupplierEnum } from 'src/utils/entities/TypeOfSupplierEnum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Application extends LeasingBaseEntity {
  @Column()
  isNew: boolean;

  @Column({ nullable: true })
  isReturnable: boolean;

  @Column({
    type: 'enum',
    enum: TypeOfLeasingSubjectEnum,
  })
  subjectOfLeasing: TypeOfLeasingSubjectEnum;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  country: string;

  @Column({ type: 'timestamptz' })
  releaseDate: Date;

  @Column({
    type: 'enum',
    enum: TypeOfSupplierEnum,
  })
  typeOfSupplier: string;

  @Column({ nullable: true })
  ndsPayer: boolean;

  @ManyToOne(() => Client)
  @JoinColumn()
  client: Client;
}
