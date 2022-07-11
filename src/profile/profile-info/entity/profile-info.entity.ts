import { Address } from 'src/address/entity/address.entity';
import { OkvdDictionary } from 'src/dictionaries/okvd-dictionary/entity/okvd-dictionary.entity';
import { TaxationSystemDictionary } from 'src/dictionaries/taxation-system-dictionary/entity/taxation-system-dictionary.entity';
import { Fio } from 'src/fio/entity/fio.entity';
import { Founder } from 'src/founder/entity/founder.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { GuarantorTypeEnum } from 'src/utils/entities/GuarantorTypeEnum';
import { Column, TableInheritance } from 'typeorm';

@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class ProfileInfo extends LeasingBaseEntity {
  @Column()
  site: string;

  @Column()
  ogrn: number;

  @Column()
  kpp: number;

  @Column()
  fullName: string;

  @Column()
  shortName: string;

  @Column()
  actualAddress: Address;

  @Column()
  actualSameWithLegal: boolean;

  @Column()
  legalAddress: Address;

  @Column()
  postAddress: Address;

  @Column()
  postSameWithLegal: boolean;

  @Column()
  postSameWithActual: boolean;

  @Column({ type: 'varchar' })
  email: string;

  @Column()
  generalManager: Fio;

  @Column()
  phone: string;

  @Column()
  taxationSystem: TaxationSystemDictionary;

  @Column()
  mainActivityByOkvd: OkvdDictionary;

  @Column()
  actualActivityByOkvd: OkvdDictionary[];

  @Column()
  registrationDate: Date;

  @Column()
  businessStartDate: Date;

  @Column()
  businessStartSameWithRegistration: boolean;

  @Column()
  founders: Founder[];

  @Column()
  guaranteeOfGD: boolean;

  @Column({
    type: 'enum',
    enum: GuarantorTypeEnum,
  })
  type: GuarantorTypeEnum;
}
