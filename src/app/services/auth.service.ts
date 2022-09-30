import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';
import { Subject } from "rxjs";
import { IUser } from "../models/user.model";
import { UserManagementService } from "./user.management.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    jwtHelper = new JwtHelperService;



    constructor(private http: HttpClient, private userService: UserManagementService) {
    }

    loginUser(data: any) {
        return this.http.post<any>("http://localhost:8080/login", data)
    }

    setSession(access_token: string) {
        console.log(access_token);
        var decryptedUser = this.jwtHelper.decodeToken(access_token);
        var expiresIn = decryptedUser.exp;
        const expiresAt = moment.unix(expiresIn);
        console.log(expiresIn);
        console.log(expiresAt);
        localStorage.setItem('access_token', access_token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt));
    }

    //TODO: fix backend method
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem("expires_at");
        return this.http.get("http://localhost:8080/logout").subscribe({
            next: (response: any) => {
                this.userService.cleanAfterLogout();
                localStorage.removeItem("access_token");
                localStorage.removeItem("expires_at");
            },
            error: () => {
                this.userService.cleanAfterLogout();
                localStorage.removeItem("access_token");
                localStorage.removeItem("expires_at");
                alert('couldnt log out')
            }
        });;
    }

    public isLoggedIn() {
        console.log(moment().isBefore(this.getExpiration()));
        return moment().isBefore(this.getExpiration());
    }



    getExpiration() {
        const expiration = localStorage.getItem("expires_at")!;
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }


    // intializeCurrentUser() {
    //     this.http.get("http://localhost:8080/api/account").subscribe({
    //         next: (response: any) => {
    //             this._user = response;
    //             this.user.next(this._user);
    //         },
    //         error: () => {
    //             console.log('couldnt get cuurent user in home init')
    //         }
    //     });;;
    // }
    //TODO: USUNAC 
    testOwner() {
        return this.http.get("http://localhost:8080/api/testOwner");
    }

    testTenant() {
        return this.http.get("http://localhost:8080/api/testTenant");
    }
}