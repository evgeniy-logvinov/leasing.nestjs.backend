import { EntityRepository, Repository } from 'typeorm';
import { SalesDepartmentDto } from '../dto/sales-department.dto';
import { SalesDepartment } from '../entity/sales-department.entity';

@EntityRepository(SalesDepartment)
export class SalesDepartmentRepository extends Repository<SalesDepartment> {
  async createSalesDepartment(
    salesDepartmentDto: SalesDepartmentDto,
  ): Promise<SalesDepartment> {
    const { regions, headOfDepartment } = salesDepartmentDto;

    const salesDepartment = new SalesDepartment();

    salesDepartment.regions = regions;
    salesDepartment.headOfDepartment = headOfDepartment;

    await salesDepartment.save();

    return salesDepartment;
  }
}
