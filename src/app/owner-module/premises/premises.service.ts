import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PremisesService {

    constructor(private http: HttpClient) {
    }

    getAllOwnerPremises(ownerId: any) {
        return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/premises')
    }


}