import { IBill } from "./bill.model";
import { IPremises } from "./premises.model";
import { IRentalId } from "./rentalId.model";
import { ITenant } from "./tenant.model";

export interface IRental {
  id?: IRentalId; //???
  name?: string;
  rentPrice?: number;
  rentalStartDate?: Date;
  rentalEndDate?: Date;
  costsPart?: number;
  paymentDay?: number;
  tenant?: ITenant;
  premises?: IPremises;
  bills?: IBill[];
}
