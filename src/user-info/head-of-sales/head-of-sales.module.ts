import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeadOfSalesController } from './head-of-sales.controller';
import { HeadOfSalesRepository } from './repository/head-of-sales.repository';
import { HeadOfSalesService } from './service/head-of-sales.service';

@Module({
  imports: [TypeOrmModule.forFeature([HeadOfSalesRepository])],
  controllers: [HeadOfSalesController],
  providers: [HeadOfSalesService],
})
export class HeadOfSalesModule {}
