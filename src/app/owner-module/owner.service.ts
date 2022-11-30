import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) {
  }

  getOwner(ownerId: any) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId)
  }

  addPayUCredentials(data: any, ownerId: number) {
    return this.http.patch<any>("http://localhost:8080/api/owners/" + ownerId, data);
  }

  getUsersForOwner(ownerId: any) {
    return this.http.get<any>('http://localhost:8080/api/owners/' + ownerId + '/users')
  }
}
