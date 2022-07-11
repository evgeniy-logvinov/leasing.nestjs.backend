import { RegionDictionary } from 'src/dictionaries/region-dictionary/entity/region-dictionary.entity';
import { LeasingBaseEntity } from 'src/utils/entities';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class CityDictionary extends LeasingBaseEntity {
  @Column()
  name: string;

  @ManyToOne((type) => RegionDictionary, (region) => region.id, {
    // eager: true,
  })
  @JoinColumn({ name: 'region_id' })
  region: RegionDictionary;
}
