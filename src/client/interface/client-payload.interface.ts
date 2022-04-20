import { UserState } from '../entity/client.entity';

export interface ClientPayload {
  id?: number;
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
