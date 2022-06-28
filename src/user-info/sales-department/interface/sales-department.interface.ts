import { RegionPayload } from 'src/user-info/region/interface/region.interface';

export interface SalesDepartmentPayload {
  id: string;
  headOfDepartment: string;
  regions: RegionPayload[];
}
