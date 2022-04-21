import { UserState } from 'src/utils/types';

export interface LeasingCompanyPayload {
  id?: string;
  userName: string;
  inn: number;
  email: string;
  state: UserState;
  createdDate: Date;
  updatedDate: Date;
  blocked: boolean;
  invited: boolean;
  description: string;
}
