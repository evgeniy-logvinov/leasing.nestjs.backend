import { EmployeePayload } from 'src/leasing-base-user/employee/interface/employee.interface';

export interface AnaliticsDepartmentPayload {
  id: string;
  headOfDepartment: string;
  employees: EmployeePayload[];
}
