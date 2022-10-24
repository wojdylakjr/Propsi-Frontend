import { IPremises } from "./premises.model";
import { IProperty } from "./property.model";
import { ITenant } from "./tenant.model";

export interface IRental {
    // id?: number; //???
    name?: string;
    price?: number;
    tenant?: ITenant;
    premises?: IPremises;
}
