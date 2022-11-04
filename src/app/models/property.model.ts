import { IAddress } from "./address.model";
import { IFixedCost } from "./fixedCost.model";
import { IMeter } from "./meter.model";
import { IPremises } from "./premises.model";

export interface IProperty {
    id?: number;
    name?: string;
    isSinglePremises?: boolean;
    address?: IAddress;
    premises?: IPremises[] | null;
    fixedCosts?: IFixedCost[] | null;

}
