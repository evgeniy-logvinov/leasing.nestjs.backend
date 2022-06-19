import { UserState } from 'src/utils/types';

export interface ClientPayload {
  id: string;
  userName: string;
  inn: number;
  state: UserState;
  createdDate: Date;
  updatedDate: Date;
  blocked: boolean;
  invited: boolean;
  description: string;
}
