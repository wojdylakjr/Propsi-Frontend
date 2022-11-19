import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt"
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class BillService {


  constructor(private http: HttpClient) {
  }

  //bills moved to bill service
  getAllBillsForOwner(ownerId: number) {
    return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/bills");
  }

  getOwnerPropertyById(ownerId: number, billId: number) {
    return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/bills/" + billId);
  }

  generateBillsForOnePremises(ownerId: number, premisesId: number) {
    return this.http.post<any>("http://localhost:8080/api/owners/" + ownerId + "/premises/" + premisesId + "/bills", null);
  }
  createPayment(ownerId: number, billId: number) {
    return this.http.post<any>("http://localhost:8080/api/owners/" + ownerId + "/bills/" + billId + "/pay", null);
  }
}


