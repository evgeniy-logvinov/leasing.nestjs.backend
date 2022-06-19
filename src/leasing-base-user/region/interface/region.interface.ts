import { EmployeePayload } from 'src/leasing-base-user/employee/interface/employee.interface';

export interface RegionPayload {
  id: string;
  name: string;
  headOfDepartment: string;
  employees: EmployeePayload[];
}
