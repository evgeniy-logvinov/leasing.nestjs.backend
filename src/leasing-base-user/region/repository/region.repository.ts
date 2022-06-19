import { EntityRepository, Repository } from 'typeorm';
import { RegionDto } from '../dto/region.dto';
import { Region } from '../entity/region.entity';

@EntityRepository(Region)
export class RegionRepository extends Repository<Region> {
  async createRegion(regionDto: RegionDto): Promise<Region> {
    const { employees, name, headOfDepartment } = regionDto;

    const region = new Region();

    region.name = name;
    region.employees = employees;
    region.headOfDepartment = headOfDepartment;

    await region.save();

    return region;
  }
}
