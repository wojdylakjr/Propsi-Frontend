import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnerService } from '../../owner.service';

@Component({
  selector: 'app-add-pay-ucredentials-dialog',
  templateUrl: './add-pay-ucredentials-dialog.component.html',
  styleUrls: ['./add-pay-ucredentials-dialog.component.scss']
})
export class AddPayUCredentialsDialogComponent implements OnInit {

  addForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private ownerService: OwnerService, private dialogRef: MatDialogRef<AddPayUCredentialsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    console.log(this.data);
    this.addForm = this.formBuilder.group({
      payUClientId: [''],
      payUClientSecret: ['']
    })
  }
  addPayUCredentials() {
    console.log("dziala!!");
    console.log(this.addForm.value);
    if (this.addForm.valid) {
      this.ownerService.addPayUCredentials(this.addForm.value, this.data.ownerId)
        .subscribe({
          next: (response) => {
            console.log("PayU credentials added sucsefully");
            this.dialogRef.close();
          },
          error: () => {
            console.log("error - PayU credentials not added");
          }
        })
    }

  }
}
