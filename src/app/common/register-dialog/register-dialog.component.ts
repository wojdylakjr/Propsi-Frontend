import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Authority } from '../../models/authorities.enum';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  authority = Authority;
  registerForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: RegisterService, private dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      authorities: [[]]
    })
  }
  registerUser() {
    console.log(Authority.Admin);
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.api.registerUser(this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log("User saved succsefully");
            this.dialogRef.close();
          },
          error: () => {
            alert("Error while saving new user")
          }
        })
    }
  }

}
