import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMeter } from 'src/app/models/meter.model';
import { PremisesService } from '../premises.service';

@Component({
  selector: 'app-add-meter-measurement-dialog',
  templateUrl: './add-meter-measurement-dialog.component.html',
  styleUrls: ['./add-meter-measurement-dialog.component.scss']
})
export class AddMeterMeasurementDialogComponent implements OnInit {
  meters: IMeter[] = [];
  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private premisesService: PremisesService, private dialogRef: MatDialogRef<AddMeterMeasurementDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    console.log(this.data);
    this.loadPremisesMeters();
    this.addForm = this.formBuilder.group({
      value: [''],
      unit: [''],
      date: Date,
      meterId: ['']
    })
  }
  loadPremisesMeters() {
    console.log(this.data)
    this.premisesService.getAllMetersForOnePremises(this.data.ownerId, this.data.premisesId)
      .subscribe({
        next: (response) => {
          this.meters = response;
          console.log("Premises readed sucsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

  addMeterMeasurement() {
    console.log("dziala!!");
    console.log(this.addForm.value);
    if (this.addForm.valid) {
      this.premisesService.addNewMeterMeasurement(this.addForm.value)
        .subscribe({
          next: (response) => {
            console.log("New Meter Measurement saved succsefully");
            this.dialogRef.close();
          },
          error: () => {
            alert("Error while saving new Meter Measurement")
          }
        })
    }

  }
}

