import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeadOfSalesDto } from '../dto/head-of-sales.dto';
import { HeadOfSales } from '../entity/head-of-sales.entity';
import { HeadOfSalesRepository } from '../repository/head-of-sales.repository';

@Injectable()
export class HeadOfSalesService {
  constructor(
    @InjectRepository(HeadOfSales)
    private headOfSalesRepository: HeadOfSalesRepository,
  ) {}

  createHeadOfSales(headOfSales: HeadOfSalesDto): Promise<HeadOfSales> {
    // TODO: send email
    return this.headOfSalesRepository.createHeadOfSales(headOfSales);
  }
}
