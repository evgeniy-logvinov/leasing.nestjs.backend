import { PermissionEnum, RoleEnum } from 'src/utils/entities';

export interface JwtPayload {
  email: string;
  role: RoleEnum;
  permissions: PermissionEnum[];
}
