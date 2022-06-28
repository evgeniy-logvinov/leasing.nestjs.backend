import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from '../dto/employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { Employee } from '../entity/employee.entity';
import { EmployeePayload } from '../interface/employee.interface';
import { EmployeeRepository } from '../repository/employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async getAllEmployee(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async createEmployee(employee: EmployeeDto): Promise<Employee> {
    return this.employeeRepository.createEmployee(employee);
  }

  async updateEmployee(employeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.getEmployeeById(employeeDto.id);
    employee.firstName = employeeDto.firstName;
    employee.lastName = employeeDto.lastName;
    employee.patronymic = employeeDto.patronymic;

    await employee.save();

    return employee;
  }

  async getEmployeeById(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundException(`This ${id} is not found`);
    }
    return employee;
  }
}
