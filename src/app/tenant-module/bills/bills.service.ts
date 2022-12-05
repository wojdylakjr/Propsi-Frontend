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
  getAllBillsForTenant(tenantId: number) {
    return this.http.get<any>("http://localhost:8080/api/tenants/" + tenantId + "/bills");
  }

  getTenantBillById(tenantId: number, billId: number) {
    return this.http.get<any>("http://localhost:8080/api/tenants/" + tenantId + "/bills/" + billId);
  }

  createPayment(tenantId: number, billId: number) {
    return this.http.post<any>("http://localhost:8080/api/tenants/" + tenantId + "/bills/" + billId + "/pay", null);
  }
}


