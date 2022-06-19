import { RegionPayload } from 'src/leasing-base-user/region/interface/region.interface';

export interface SalesDepartmentPayload {
  id: string;
  headOfDepartment: string;
  regions: RegionPayload[];
}
