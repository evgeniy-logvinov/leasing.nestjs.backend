import { EmployeePayload } from 'src/user/employee/interface/employee.interface';

export interface AnaliticsDepartmentPayload {
  id: string;
  headOfDepartment: string;
  employees: EmployeePayload[];
}
