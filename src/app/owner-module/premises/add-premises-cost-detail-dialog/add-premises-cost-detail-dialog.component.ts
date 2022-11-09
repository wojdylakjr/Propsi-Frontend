import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMeter } from 'src/app/models/meter.model';
import { IPremisesCost } from 'src/app/models/premisesCost.model';
import { AddMeterMeasurementDialogComponent } from '../add-meter-measurement-dialog/add-meter-measurement-dialog.component';
import { PremisesService } from '../premises.service';

@Component({
  selector: 'app-add-premises-cost-detail-dialog',
  templateUrl: './add-premises-cost-detail-dialog.component.html',
  styleUrls: ['./add-premises-cost-detail-dialog.component.scss']
})
export class AddPremisesCostDetailDialogComponent implements OnInit {
  premisesCosts: IPremisesCost[] = [];
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private premisesService: PremisesService, private dialogRef: MatDialogRef<AddMeterMeasurementDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    console.log(this.data);
    this.loadPremisesCosts();
    this.addForm = this.formBuilder.group({
      costValue: [''],
      unit: [''],
      date: Date,
      premisesCostId: ['']
    })
  }
  loadPremisesCosts() {
    console.log(this.data)
    this.premisesService.getAllCostsForOnePremises(this.data.ownerId, this.data.premisesId)
      .subscribe({
        next: (response) => {
          this.premisesCosts = response;
          console.log("Premises costs readed sucsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

  addPremisesCostDetail() {
    console.log("dziala!!");
    console.log(this.addForm.value);
    if (this.addForm.valid) {
      this.premisesService.addNewPremisesCostDetail(this.addForm.value)
        .subscribe({
          next: (response) => {
            console.log("New New Premises Cost Detail saved succsefully");
            this.dialogRef.close();
          },
          error: () => {
            alert("Error while saving new NewPremisesCostDetail ")
          }
        })
    }

  }
}
