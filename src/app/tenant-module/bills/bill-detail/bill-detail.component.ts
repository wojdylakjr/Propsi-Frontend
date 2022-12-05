import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBill } from 'src/app/models/bill.model';
import { IOwner } from 'src/app/models/owner.model';
import { ITenant } from 'src/app/models/tenant.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { BillService } from '../bills.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent implements OnInit {

  billId = 0;
  tenant: ITenant = {};
  bill: IBill = {};
  BillLineItemsDisplayColumns: string[] = ["id", "name", "price", "unit", "action"];
  constructor(private route: ActivatedRoute, private billService: BillService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.tenant.subscribe(tenant => { this.tenant = tenant });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.billId = params['id'];
      this.getBillById();

    });
  }

  getBillById() {
    this.billService.getTenantBillById(this.tenant.id!, this.billId)
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
  createPayment() {
    this.billService.createPayment(this.tenant.id!, this.billId)
      .subscribe({
        next: (response) => {
          window.open(response.redirectUri, "_blank");
          console.log("Payment created succsefully");
        },
        error: () => {
          console.log("Error while creating payment")
        }
      })
  }
}
