import { IPremisesCost } from "./premisesCost.model";

export interface IPremisesCostDetails {
  id?: number;
  premisesCost?: IPremisesCost;
  value?: number;
  date?: Date;
  unit?: string;
}
