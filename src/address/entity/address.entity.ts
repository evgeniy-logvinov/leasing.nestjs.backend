import { CityDictionary } from 'src/dictionaries/city-dictionary/entity/city-dictionary.entity';
import { RegionDictionary } from 'src/dictionaries/region-dictionary/entity/region-dictionary.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Address extends LeasingBaseEntity {
  @Column()
  index: number;

  @ManyToOne(() => RegionDictionary)
  @JoinColumn()
  region: RegionDictionary;

  @ManyToOne(() => CityDictionary)
  @JoinColumn()
  city: CityDictionary;

  @Column()
  district: string;
  // district: DistrictList;

  @Column()
  street: string;

  @Column()
  house: string;

  @Column()
  corpus: string;

  @Column()
  building: string;

  @Column()
  litera: string;

  @Column()
  number: string;
}
