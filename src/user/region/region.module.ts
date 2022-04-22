import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionRepository } from './repository/region.repository';
import { RegionService } from './service/region.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegionRepository])],
  controllers: [],
  providers: [RegionService],
})
export class RegionModule {}
