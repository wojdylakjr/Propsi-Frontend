import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBill } from 'src/app/models/bill.model';
import { IOwner } from 'src/app/models/owner.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { BillService } from '../bills.service';

@Component({
  selector: 'app-bills-detail',
  templateUrl: './bills-detail.component.html',
  styleUrls: ['./bills-detail.component.scss']
})
export class BillsDetailComponent implements OnInit {



  billId = 0;
  owner: IOwner = {};
  bill: IBill = {};
  BillLineItemsDisplayColumns: string[] = ["id", "name", "price", "unit", "action"];
  constructor(private route: ActivatedRoute, private billService: BillService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.billId = params['id'];
      this.getBillById();

    });
  }

  getBillById() {
    this.billService.getOwnerPropertyById(this.owner.id!, this.billId)
      .subscribe({
        next: (response) => {
          this.bill = response;
          console.log("Bill read succsefully");
        },
        error: () => {
          console.log("Error while geting bill")
        }
      })
  }
  removeBillItem(arg0: any) {
    throw new Error('Method not implemented.');
  }
  editBillItem(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
