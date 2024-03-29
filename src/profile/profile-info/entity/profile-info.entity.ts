import { Address } from 'src/address/entity/address.entity';
import { OkvdDictionary } from 'src/dictionaries/okvd-dictionary/entity/okvd-dictionary.entity';
import { TaxationSystemDictionary } from 'src/dictionaries/taxation-system-dictionary/entity/taxation-system-dictionary.entity';
import { Fio } from 'src/fio/entity/fio.entity';
import { Founder } from 'src/founder/entity/founder.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { GuarantorTypeEnum } from 'src/utils/entities/GuarantorTypeEnum';
import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class ProfileInfo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column()
  site: string;

  @Column()
  inn: string;

  @Column()
  ogrn: number;

  @Column()
  kpp: number;

  @Column()
  fullName: string;

  @Column()
  shortName: string;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  actualAddress: Address;

  @Column()
  actualSameWithLegal: boolean;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  legalAddress: Address;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  postAddress: Address;

  @Column()
  postSameWithLegal: boolean;

  @Column()
  postSameWithActual: boolean;

  @Column({ type: 'varchar' })
  email: string;

  @ManyToOne(() => Fio)
  @JoinColumn()
  generalManager: Fio;

  @Column()
  phone: string;

  @ManyToOne(
    () => TaxationSystemDictionary,
    (taxationSystem) => taxationSystem.id,
    {
      // eager: true,
    },
  )
  @JoinColumn({ name: 'taxation_system_id' })
  taxationSystem: TaxationSystemDictionary;

  @ManyToOne(
    () => OkvdDictionary,
    (mainActivityByOkvd) => mainActivityByOkvd.id,
    {
      // eager: true,
    },
  )
  @JoinColumn({ name: 'okvd_id' })
  mainActivityByOkvd: OkvdDictionary;

  @ManyToMany(() => OkvdDictionary, {
    eager: true,
  })
  @JoinTable()
  actualActivityByOkvd: OkvdDictionary[];

  @Column()
  registrationDate: Date;

  @Column()
  businessStartDate: Date;

  @Column()
  businessStartSameWithRegistration: boolean;

  @OneToMany(() => Founder, (founder) => founder.profileInfo, {
    eager: true,
  })
  founders: Founder[];

  @Column()
  guaranteeOfGD: boolean;
}
