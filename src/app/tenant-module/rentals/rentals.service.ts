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



  // TODO: change to return only owner rentals
  getTenantRentals(tenantId: number) {
    return this.http.get<any>("http://localhost:8080/api/tenants/" + tenantId + "/rentals");
  }

  getTenantRentalById(tenantId: number, premisesId: number) {
    return this.http.get<any>("http://localhost:8080/api/tenants/" + tenantId + "/rentals/" + premisesId);
  }

  //bills moved to bill service
  // getAllBillsForRental(ownerId: number, tenantId: number, premisesId: number) {
  //   return this.http.get<any>("http://localhost:8080/api/owners/" + ownerId + "/rentals/" + tenantId + "/" + premisesId + "/bills");
  // }

  getAllMetersMeasurementsForOnePremises(tenantId: number, premisesId: number) {
    return this.http.get<any>('http://localhost:8080/api/tenants/' + tenantId + '/premises/' + premisesId + '/metersMeasurements');
  }



}
