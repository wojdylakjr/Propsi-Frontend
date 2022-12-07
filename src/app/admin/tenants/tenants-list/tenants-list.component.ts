import { Component, OnInit } from '@angular/core';
import { ITenant } from 'src/app/models/tenant.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit {

  users!: ITenant[];
  displayColumns: string[] = ["id", "name", "action"]
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllTenants();
  }

  getAllTenants() {
    this.adminService.getAllTenants()
      .subscribe({
        next: (response) => {
          this.users = response;
          console.log("Tenants readed sucsefully");
        },
        error: () => {
          console.log("Error while geting tenants")
        }
      })
  }

  removeUser(userId: number) {
    console.log("not implented");
  }


}
