import { IPremises } from "./premises.model";

export interface IProperty {
    id?: number;
    name?: string;
    isSinglePremises?: boolean;
    premises?: IPremises[] | null;
}
