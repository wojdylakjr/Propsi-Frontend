import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<any>('http://localhost:8080/api/admin/users/')
  }


  getAllOwners() {
    return this.http.get<any>('http://localhost:8080/api/admin/owners/')
  }


  getAllTenants() {
    return this.http.get<any>('http://localhost:8080/api/admin/tenants/')
  }


}
