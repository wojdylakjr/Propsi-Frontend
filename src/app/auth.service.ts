import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {JwtHelperService} from "@auth0/angular-jwt"
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    jwtHelper = new JwtHelperService;
    constructor(private http: HttpClient) {

    }

    login(email:string, password:string ) {
        return this.http.post<any>('/api/login', {email, password});
    }
   
 loginUser(data : any){
    return this.http.post<any>("http://localhost:8080/login", data);
  }       

    setSession(accessToken:string) {
console.log(accessToken);
        // var expiresIn = this.jwtHelper.getTokenExpirationDate(accessToken);
                var decryptedUser = this.jwtHelper.decodeToken(accessToken);

  
        var expiresIn= decryptedUser.exp;
        // var idToken;
        const expiresAt = moment.unix(expiresIn);
console.log(expiresIn);
console.log(expiresAt);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt) );
        this.isLoggedIn();
    }          

    logout() {
        returnthis.http.get("http://localhost:8080/logout");
 
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
    //TODO: USUNAC 

    testOwner(){
return this.http.get("http://localhost:8080/api/testOwner")
    }

    testTenant(){
return this.http.get("http://localhost:8080/api/testTenant")
    }
}