import { IPremises } from "./premises.model";
import { IProperty } from "./property.model";
import { ITenant } from "./tenant.model";

export interface IRental {
  // id?: number; //???
  name?: string;
  rentPrice?: number;
  rentalStartDate?: Date;
  rentalEndDate?: Date;
  costsPart?: number;
  paymentDay?: number;
  tenant?: ITenant;
  premises?: IPremises;
}
