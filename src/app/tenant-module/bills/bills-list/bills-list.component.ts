import { Component, OnInit } from '@angular/core';
import { IBill } from 'src/app/models/bill.model';
import { ITenant } from 'src/app/models/tenant.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { BillService } from '../bills.service';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})
export class BillsListComponent implements OnInit {

  tenant: ITenant = {};

  bills!: IBill[];
  displayColumns: string[] = ["id", "premises", "property", "owner", "price", "date", "status", "action"]

  constructor(private billService: BillService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.tenant.subscribe(tenant => { this.tenant = tenant });
    this.getOwnerBills();
  }


  getOwnerBills() {
    this.billService.getAllBillsForTenant(this.tenant.id!)
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
