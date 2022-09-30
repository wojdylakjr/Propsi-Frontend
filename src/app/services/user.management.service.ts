import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';
import { Subject } from "rxjs";
import { Authority } from "../models/authorities.enum";
import { IOwner } from "../models/owner.model";
import { ITenant } from "../models/tenant.model";
import { IUser } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserManagementService {
    private _user: IUser = {};
    readonly user: Subject<IUser> = new Subject<IUser>();

    private _owner: IUser = {};
    readonly owner: Subject<IUser> = new Subject<IUser>();

    private _tenant: IUser = {};
    readonly tenant: Subject<IUser> = new Subject<IUser>();

    constructor(private http: HttpClient) {
    }

    intializeCurrentUser() {
        this.http.get("http://localhost:8080/api/account").subscribe({
            next: (response: any) => {
                this._user = response;
                this.user.next(this._user);
            },
            error: () => {
                console.log('couldnt get cuurent user in home init')
            }
        });;;
    }
    cleanAfterLogout() {
        this.setEmptyUser();
        this.setEmptyOwnerProfile();
        this.setEmptyTenantProfile();
    }

    setEmptyUser() {
        this.user.next({});
    }

    setEmptyOwnerProfile() {
        this.owner.next({});
    }

    setEmptyTenantProfile() {
        this.tenant.next({});
    }

    setOwner(owner: IOwner) {
        this._owner = owner;
        this.owner.next(this._owner);
    }

    setTenant(teanat: ITenant) {
        this._tenant = teanat;
        this.tenant.next(this._tenant);
    }

}