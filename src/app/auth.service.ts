import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';
import { Subject } from "rxjs";
import { IUser } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    jwtHelper = new JwtHelperService;

    private _user:IUser = {};
    readonly user: Subject<IUser> = new Subject<IUser>();

    constructor(private http: HttpClient) {
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
        // this.isLoggedIn();
    }

    //TODO: fix backend method
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem("expires_at");
        return this.http.get("http://localhost:8080/logout").subscribe({
            next: (response: any) => {
                this.user.next({});
                localStorage.removeItem("access_token");
                localStorage.removeItem("expires_at");
            },
            error: () => {
                this.user.next({});
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

    getCurrentUser() {
        // return this.http.get("http://localhost:8080/api/account").subscribe({
        //     next: (response: any) => {
        //         this.user.next(response);
        //     },
        //     error: () => {
        //         alert('couldnt get cuurent user')
        //     }
        // });;;
    }


    intializeCurrentUser() {
        this.http.get("http://localhost:8080/api/account").subscribe({
            next: (response: any) => {
                this._user = response;
                this.user.next(this._user);
            },
            error: () => {
                alert('couldnt get cuurent user')
            }
        });;;
    }
    //TODO: USUNAC 
    testOwner() {
        return this.http.get("http://localhost:8080/api/testOwner");
    }

    testTenant() {
        return this.http.get("http://localhost:8080/api/testTenant");
    }
}