import { Component, OnInit } from '@angular/core';
import { IBill } from 'src/app/models/bill.model';
import { IOwner } from 'src/app/models/owner.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { BillService } from '../bills.service';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillsListComponent implements OnInit {
  owner: IOwner = {};

  bills!: IBill[];
  displayColumns: string[] = ["id", "tenant", "premises", "property", "price", "date", "status", "action"]

  constructor(private billService: BillService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.getOwnerBills();
  }


  getOwnerBills() {
    this.billService.getAllBillsForOwner(this.owner.id!)
      .subscribe({
        next: (response) => {
          this.bills = response;
          console.log("Bills read succsefully");
        },
        error: () => {
          console.log("Error while geting bills")
        }
      })
  }

  RemoveProperty(arg0: any) {
    throw new Error('Method not implemented.');
  }
  openProperty(propertyId: number) {
    console.log(propertyId);
  }
  AddNewProperty(arg0: string) {
    throw new Error('Method not implemented.');
  }

}

