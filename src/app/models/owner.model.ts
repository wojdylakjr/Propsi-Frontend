import { IProperty } from "./property.model";

export interface IOwner {
    id?: number;
    name?: string;
    owners?: IProperty[] | null;
}
