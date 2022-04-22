import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesDepartmentDto } from '../dto/sales-department.dto';
import { UpdateSalesDepartmentDto } from '../dto/update-sales-department.dto';
import { SalesDepartment } from '../entity/sales-department.entity';
import { SalesDepartmentRepository } from '../repository/sales-department.repository';

@Injectable()
export class SalesDepartmentService {
  constructor(
    @InjectRepository(SalesDepartmentRepository)
    private salesDepartmentRepository: SalesDepartmentRepository,
  ) {}

  async getAllSalesDepartments(): Promise<SalesDepartment[]> {
    return this.salesDepartmentRepository.find();
  }

  async createSalesDepartment(
    salesDepartment: SalesDepartmentDto,
  ): Promise<SalesDepartment> {
    return this.salesDepartmentRepository.createSalesDepartment(
      salesDepartment,
    );
  }

  async updateSalesDepartment(
    salesDepartmentDto: UpdateSalesDepartmentDto,
  ): Promise<SalesDepartment> {
    const salesDepartment = await this.getSalesDepartmentById(
      salesDepartmentDto.id,
    );
    salesDepartment.regions = salesDepartmentDto.regions;
    salesDepartment.headOfDepartment = salesDepartmentDto.headOfDepartment;

    await salesDepartment.save();

    return salesDepartment;
  }

  async getSalesDepartmentById(id: string): Promise<SalesDepartment> {
    const salesDepartment = await this.salesDepartmentRepository.findOne({
      where: { id },
    });

    if (!salesDepartment) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return salesDepartment;
  }
}
