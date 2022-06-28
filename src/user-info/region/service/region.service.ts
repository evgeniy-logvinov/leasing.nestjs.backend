import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionDto } from '../dto/region.dto';
import { UpdateRegionDto } from '../dto/update-region.dto';
import { Region } from '../entity/region.entity';
import { RegionRepository } from '../repository/region.repository';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(RegionRepository)
    private regionRepository: RegionRepository,
  ) {}

  async getAllRegions(): Promise<Region[]> {
    return this.regionRepository.find();
  }

  async createRegion(region: RegionDto): Promise<Region> {
    return this.regionRepository.createRegion(region);
  }

  async updateRegion(regionDto: UpdateRegionDto): Promise<Region> {
    const region = await this.getRegionById(regionDto.id);
    region.name = regionDto.name;
    region.employees = regionDto.employees;
    region.headOfDepartment = regionDto.headOfDepartment;

    await region.save();

    return region;
  }

  async getRegionById(id: string): Promise<Region> {
    const region = await this.regionRepository.findOne({
      where: { id },
    });

    if (!region) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return region;
  }
}
