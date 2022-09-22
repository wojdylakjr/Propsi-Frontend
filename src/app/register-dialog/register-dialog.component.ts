import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  registerForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private api: RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName : [''],
      lastName:[''],
      email:[''],
      password:[''],
      authorities:[[]]
    })
  }
  registerUser(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.api.registerUser(this.registerForm.value)
      .subscribe({next:(response)=>{
        alert("User saved succsefully")
      },
      error:()=>{
        alert("Error while saving new user")
      }
    })
    }
  }

}
