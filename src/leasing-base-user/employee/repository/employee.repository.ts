import { EntityRepository, Repository } from 'typeorm';
import { EmployeeDto } from '../dto/employee.dto';
import { Employee } from '../entity/employee.entity';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  async createEmployee(employeeDto: EmployeeDto): Promise<Employee> {
    const { firstName, lastName, patronymic } = employeeDto;

    const employee = new Employee();

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.patronymic = patronymic;

    await employee.save();

    return employee;
  }
}
