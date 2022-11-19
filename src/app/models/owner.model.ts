import { IProperty } from "./property.model";

export interface IOwner {
  id?: number;
  name?: string;
  properties?: IProperty[] | null;
  payUClientId?: string;
  payUClientSecret?: string;

}
