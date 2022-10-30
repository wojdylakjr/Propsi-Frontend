import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';


@Injectable({
    providedIn: 'root'
})
export class RentalService {

    constructor(private http: HttpClient) {
    }

    create(data: any) {
        return this.http.post<any>("http://localhost:8080/api/rentals", data);
    }

    // TODO: change to return only owner rentals
    getOwnerRentals(ownerId: number) {
        return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/rentals");
    }

    getOwnerPremises(ownerId: number) {
        return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/premises");
    }

    getAllTenants() {
        return this.http.get<any>("http://localhost:8080/api/tenants");
    }



}