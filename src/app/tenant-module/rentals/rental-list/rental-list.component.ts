import { Component, OnInit } from '@angular/core';
import { IOwner } from 'src/app/models/owner.model';
import { IRental } from 'src/app/models/rental.model';
import { ITenant } from 'src/app/models/tenant.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { RentalService } from '../rentals.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  tenant: ITenant = {};
  rentals!: IRental[];
  displayColumns: string[] = ["name", "owner", "premises", "property", "rentPrice", "action"]
  constructor(private rentalService: RentalService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.tenant.subscribe(tenant => { this.tenant = tenant });
    this.getTenantRentals();
  }

  getTenantRentals() {
    this.rentalService.getTenantRentals(this.tenant.id!)
      .subscribe({
        next: (response) => {
          this.rentals = response;
          console.log("Rentals readed sucsefully");
        },
        error: () => {
          console.log("Error while geting properties")
        }
      })
  }

}
