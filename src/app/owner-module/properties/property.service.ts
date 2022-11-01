import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';


@Injectable({
    providedIn: 'root'
})
export class PropertyService {

    jwtHelper = new JwtHelperService;



    constructor(private http: HttpClient) {
    }

    saveProperty(data: any, ownerId: number) {
        return this.http.post<any>("http://localhost:8080/api/owners/" + ownerId + "/properties", data);
    }

    getOwnerProperties(ownerId: number) {
        return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/properties");
    }

    getOwnerPropertyById(ownerId: number, propertyId: number) {
        return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/properties/" + propertyId);
    }

}