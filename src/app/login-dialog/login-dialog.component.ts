import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: AuthService, private router: Router, private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }

  loginUser() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.api.loginUser(this.registerForm.value)
        // this.dialogRef.close()
        .subscribe({
          next: (response) => {
            this.api.setSession(response.access_token);
            this.api.intializeCurrentUser();
            console.log(response);
            // localStorage.setItem('access_token', response.access_token);
            // console.log(localStorage.getItem('access_token'));
            console.log("User login succsefully");
            this.dialogRef.close()
          },
          error: () => {
            alert("Error while logging");
          }
        })
    }
  }
}
