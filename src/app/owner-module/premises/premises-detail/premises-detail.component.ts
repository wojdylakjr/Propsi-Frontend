import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IMeterMeasurement } from 'src/app/models/meterMeasurement.model';
import { IOwner } from 'src/app/models/owner.model';
import { IPremises } from 'src/app/models/premises.model';
import { IPremisesCostDetails } from 'src/app/models/premisesCostDetail.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { AddMeterMeasurementDialogComponent } from '../add-meter-measurement-dialog/add-meter-measurement-dialog.component';
import { PremisesService } from '../premises.service';

@Component({
  selector: 'app-premises-detail',
  templateUrl: './premises-detail.component.html',
  styleUrls: ['./premises-detail.component.scss']
})
export class PremisesDetailComponent implements OnInit {
  premisesId = 0;


  owner: IOwner = {};
  premises: IPremises = {};
  metersMeasurements: IMeterMeasurement[] = [];
  premisesCostDetails: IPremisesCostDetails[] = [];
  premisesCostsDisplayColumns: string[] = ["id", "costType", "action"];
  metersDisplayColumns: string[] = ["id", "meterType", "action"];
  metersMeasurementDisplayColumns: string[] = ["id", "meter", "value", "date", "unit", "action"];
  premisesCostsDetailsDisplayColumns: string[] = ["id", "premisesCost", "costValue", "date", "unit", "action"];

  constructor(private route: ActivatedRoute, private premisesService: PremisesService, private userService: UserManagementService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.premisesId = params['id'];
      this.getOwnerPremisesById(this.premisesId);
      this.getAllMetersMeasurmentsForOnePremises();
      this.getAllCostsDetailsForOnePremises();

    });
  }

  getOwnerPremisesById(premisesId: number) {
    this.premisesService.getOwnerPremisesById(this.owner.id!, premisesId)
      .subscribe({
        next: (response) => {
          this.premises = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          console.log("Error while geting properties")
        }
      })
  }
  removePremisesCost(premisesId: number) {
    throw new Error('Method not implemented.');
  }

  getAllMetersMeasurmentsForOnePremises() {
    this.premisesService.getAllMetersMeasurementsForOnePremises(this.owner.id!, this.premisesId)
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

  getAllCostsDetailsForOnePremises() {
    this.premisesService.getAllCostsDetailsForOnePremises(this.owner.id!, this.premisesId)
      .subscribe({
        next: (response) => {
          this.premisesCostDetails = response;
          console.log("Property saved succsefully");
        },
        error: () => {
          console.log("Error while geting properties")
        }
      })
  }

  openMeterMeasurementAddDialog() {
    this.dialog.open(AddMeterMeasurementDialogComponent, {
      width: '30%',

      data: {
        premisesId: this.premisesId,
        ownerId: this.owner.id,
      },
    });
  }
}
