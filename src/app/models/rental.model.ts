import { IPremises } from "./premises.model";
import { IProperty } from "./property.model";
import { ITenant } from "./tenant.model";

export interface IRental {
    // id?: number; //???
    name?: string;
    price?: number;
    rentalStart?: Date;
    rentalEnd?: Date;
    costsPart?: number;
    paymentDat?: number;
    tenant?: ITenant;
    premises?: IPremises;
}
