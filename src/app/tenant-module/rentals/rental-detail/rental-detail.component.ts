import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IBill } from 'src/app/models/bill.model';
import { IMeterMeasurement } from 'src/app/models/meterMeasurement.model';
import { IOwner } from 'src/app/models/owner.model';
import { IRental } from 'src/app/models/rental.model';
import { ITenant } from 'src/app/models/tenant.model';
import { AddMeterMeasurementDialogComponent } from 'src/app/owner-module/premises/add-meter-measurement-dialog/add-meter-measurement-dialog.component';
import { UserManagementService } from 'src/app/services/user.management.service';
import { RentalService } from '../rentals.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {


  premisesId = 0;
  tenant: ITenant = {};
  rental: IRental = {};
  bills: IBill[] = [];
  metersMeasurements: IMeterMeasurement[] = [];
  metersMeasurementDisplayColumns: string[] = ["id", "meter", "value", "date", "unit", "action"];
  billsDisplayColumns: string[] = ["id", "date", "totalCost", "isPaid", "action"];
  constructor(private route: ActivatedRoute, private rentalService: RentalService, private userService: UserManagementService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.tenant.subscribe(tenant => { this.tenant = tenant });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.premisesId = params['id'];
      this.getOwnerRentalById();
      this.getAllMetersMeasurmentsForOnePremises();

    });
  }
  getOwnerRentalById() {
    this.rentalService.getTenantRentalById(this.tenant.id!, this.premisesId)
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

  // getRentalBills() {
  //   this.rentalService.getAllBillsForRental(this.owner.id!, this.tenantId, this.premisesId)
  //     .subscribe({
  //       next: (response) => {
  //         this.bills = response;
  //         console.log("Property saved succsefully");
  //       },
  //       error: () => {
  //         alert("Error while geting properties")
  //       }
  //     })
  // }

  getAllMetersMeasurmentsForOnePremises() {
    this.rentalService.getAllMetersMeasurementsForOnePremises(this.tenant.id!, this.premisesId)
      .subscribe({
        next: (response) => {
          this.metersMeasurements = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          console.log("Error while geting properties")
        }
      })
  }
  //TODO: currently use dialog from owner, ownerId is not used
  openMeterMeasurementAddDialog() {
    let dialogRef = this.dialog.open(AddMeterMeasurementDialogComponent, {
      width: '30%',
      data: {
        premisesId: this.premisesId,
        ownerId: this.tenant.id,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllMetersMeasurmentsForOnePremises();
    });
  }

  openAddBillDialog() {
    throw new Error('Method not implemented.');
  }

  editBill(id: number) {

  }

  removeBill(id: number) {

  }
  removePremisesCost(premisesId: number) {
    throw new Error('Method not implemented.');
  }


}
