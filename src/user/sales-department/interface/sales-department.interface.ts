import { RegionPayload } from 'src/user/region/interface/region.interface';

export interface SalesDepartmentPayload {
  id: string;
  headOfDepartment: string;
  regions: RegionPayload[];
}
