import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnaliticsDepartmentDto } from '../dto/analitics-department.dto';
import { UpdateAnaliticsDepartmentDto } from '../dto/update-analitics-department.dto';
import { AnaliticsDepartment } from '../entity/analitics-department.entity';
import { AnaliticsDepartmentRepository } from '../repository/analitics-department.repository';

@Injectable()
export class AnaliticsDepartmentService {
  constructor(
    @InjectRepository(AnaliticsDepartmentRepository)
    private analiticsDepartmentRepository: AnaliticsDepartmentRepository,
  ) {}

  async getAllAnaliticsDepartments(): Promise<AnaliticsDepartment[]> {
    return this.analiticsDepartmentRepository.find();
  }

  async createAnaliticsDepartment(
    analiticsDepartment: AnaliticsDepartmentDto,
  ): Promise<AnaliticsDepartment> {
    return this.analiticsDepartmentRepository.createAnaliticsDepartment(
      analiticsDepartment,
    );
  }

  async updateAnaliticsDepartment(
    analiticsDepartmentDto: UpdateAnaliticsDepartmentDto,
  ): Promise<AnaliticsDepartment> {
    const analiticsDepartment = await this.getAnaliticsDepartmentById(
      analiticsDepartmentDto.id,
    );
    analiticsDepartment.employees = analiticsDepartmentDto.employees;
    analiticsDepartment.headOfDepartment =
      analiticsDepartmentDto.headOfDepartment;

    await analiticsDepartment.save();

    return analiticsDepartment;
  }

  async getAnaliticsDepartmentById(id: string): Promise<AnaliticsDepartment> {
    const analiticsDepartment =
      await this.analiticsDepartmentRepository.findOne({
        where: { id },
      });

    if (!analiticsDepartment) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return analiticsDepartment;
  }
}
