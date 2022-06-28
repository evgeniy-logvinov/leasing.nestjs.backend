import { EmployeePayload } from 'src/user-info/employee/interface/employee.interface';

export interface AnaliticsDepartmentPayload {
  id: string;
  headOfDepartment: string;
  employees: EmployeePayload[];
}
