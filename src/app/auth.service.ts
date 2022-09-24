import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user?: string;

    jwtHelper = new JwtHelperService;

    userMail: Subject<string> = new Subject<string>();

    constructor(private http: HttpClient) {
        this.userMail.subscribe((value) => {
            this.user = value
        });
    }

    loginUser(data: any) {
        this.http.post<any>("http://localhost:8080/login", data).subscribe({
            next: (response: any) => {
                this.setSession(response.access_token);
                this.getCurrentUser();
                alert("User login succsefully");
            },
            error: () => {
                console.log('error')
            }
        });
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

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem("expires_at");
        return this.http.get("http://localhost:8080/logout").subscribe({
            next: (response: any) => {
                this.userMail.next('');
                localStorage.removeItem("access_token");
                localStorage.removeItem("expires_at");
            },
            error: () => {
                alert('couldnt log out')
            }
        });;
    }

    public isLoggedIn() {
        console.log(moment().isBefore(this.getExpiration()));
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at")!;
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    getCurrentUser() {
        return this.http.get("http://localhost:8080/api/account").subscribe({
            next: (response: any) => {
                this.userMail.next(response.email);
            },
            error: () => {
                alert('couldnt log out')
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