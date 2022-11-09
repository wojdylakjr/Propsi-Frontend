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
    // s = this.data2;
    // this.data2 = this.data2;
    console.log(this.data);
    console.log(this.data.premisesId);
    console.log(this.data.ownerId);
    this.loadPremises();
    this.addForm = this.formBuilder.group({
      value: [''],
      unit: [''],
      date: Date,
      meterId: ['']
    })
  }
  loadPremises() {
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


  // registerUser() {
  //   console.log(Authority.Admin);
  //   console.log(this.registerForm.value);
  //   if (this.registerForm.valid) {
  //     this.api.registerUser(this.registerForm.value)
  //       .subscribe({
  //         next: (response) => {
  //           console.log("User saved succsefully");
  //           this.dialogRef.close();
  //         },
  //         error: () => {
  //           alert("Error while saving new user")
  //         }
  //       })
  //   }
  // }
