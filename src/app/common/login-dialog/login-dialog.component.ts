import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserManagementService } from '../../services/user.management.service';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserManagementService, private router: Router, private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }

  loginUser() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.authService.loginUser(this.registerForm.value)
        .subscribe({
          next: (response) => {
            this.authService.setSession(response.access_token);
            this.userService.intializeCurrentUser();
            console.log(response);
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
