import { IPremises } from "./premises.model";

export interface IProperty {
    id?: number;
    name?: string;
    premises?: IPremises[] | null;
}
