import { Component, OnInit } from '@angular/core';
import { IOwner } from 'src/app/models/owner.model';
import { IRental } from 'src/app/models/rental.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  owner: IOwner = {};
  rentals!: IRental[];
  displayColumns: string[] = ["name", "tenant", "premises", "action"]
  constructor(private rentalService: RentalService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.getOwnerRentals();
  }

  getOwnerRentals() {
    this.rentalService.getOwnerRentals(this.owner.id!)
      .subscribe({
        next: (response) => {
          this.rentals = response;
          console.log("Rentals readed sucsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

}
