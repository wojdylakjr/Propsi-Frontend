import { IMeter } from "./meter.model";
import { IPremisesCost } from "./premisesCost.model";
import { IProperty } from "./property.model";

export interface IPremises {
    id?: number;
    name?: string;
    property?: IProperty;
    meters?: IMeter[];
    premisesCosts?: IPremisesCost[];
}
