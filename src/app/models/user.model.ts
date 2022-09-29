import { IOwner } from "./owner.model";
import { ITenant } from "./tenant.model";

export interface IUser {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    authorities?: string[];
    owners?: IOwner[] | null;
    tenants?: ITenant[] | null;
}
