import { EmployeePayload } from 'src/user-info/employee/interface/employee.interface';

export interface RegionPayload {
  id: string;
  name: string;
  headOfDepartment: string;
  employees: EmployeePayload[];
}
