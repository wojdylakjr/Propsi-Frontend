import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PremisesService {

  constructor(private http: HttpClient) {
  }

  getAllOwnerPremises(ownerId: any) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/premises');
  }

  getOwnerPremisesById(ownerId: number, premisesId: number) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/premises/' + premisesId);
  }

  getAllMetersMeasurementsForOnePremises(ownerId: number, premisesId: number) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/premises/' + premisesId + '/metersMeasurements');
  }


  getAllCostsDetailsForOnePremises(ownerId: number, premisesId: number) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/premises/' + premisesId + '/premisesCostsDetails');
  }

  getAllMetersForOnePremises(ownerId: number, premisesId: number) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/premises/' + premisesId + '/meters');
  }

  addNewMeterMeasurement(data: any) {
    return this.http.post<any>("http://localhost:8080/api/meterMeasurements", data);
  }

}
