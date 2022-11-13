import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBill } from 'src/app/models/bill.model';
import { IOwner } from 'src/app/models/owner.model';
import { IRental } from 'src/app/models/rental.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {


  tenantId = 0;
  premisesId = 0;
  owner: IOwner = {};
  rental: IRental = {};
  bills: IBill[] = [];
  billsDisplayColumns: string[] = ["id", "date", "totalCost", "isPaid", "action"];
  constructor(private route: ActivatedRoute, private rentalService: RentalService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.tenantId = params['tenantId'];
      this.premisesId = params['premisesId'];
      this.getOwnerRentalById();
      this.getRentalBills();

    });
  }
  getOwnerRentalById() {
    this.rentalService.getOwnerRentalById(this.owner.id!, this.tenantId, this.premisesId)
      .subscribe({
        next: (response) => {
          this.rental = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

  getRentalBills() {
    this.rentalService.getAllBillsForRental(this.owner.id!, this.tenantId, this.premisesId)
      .subscribe({
        next: (response) => {
          this.bills = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

  openAddBillDialog() {
    throw new Error('Method not implemented.');
  }

  editBill(id: number) {

  }

  removeBill(id: number) {

  }
}
