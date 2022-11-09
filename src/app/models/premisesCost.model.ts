import { IPremisesCostDetails } from "./premisesCostDetail.model";

export interface IPremisesCost {
  id?: number;
  costType?: string;
  premisesCostDetails: IPremisesCostDetails[];
}
