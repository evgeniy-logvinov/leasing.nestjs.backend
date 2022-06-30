import { UserState } from 'src/utils/types';

export interface LeasingCompanyEmployeesPayload {
  id: string;
  userName: string;
  inn: string;
  email: string;
  state: UserState;
  createdDate: Date;
  updatedDate: Date;
  blocked: boolean;
  invited: boolean;
  description: string;
}
