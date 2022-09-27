import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  user: IUser = {};



  constructor(private authService: AuthService) {
    
    // this.authService.userMail.subscribe({ next: (v) => { debugger; this.message = v } });
  }



  ngOnInit(): void {
    console.log(" on init");
    this.authService.user.subscribe(user => {this.user = user} )
    // if (this.authService.isLoggedIn()) {
    //   this.user$ = authService.user;
    //   // this.authService.getCurrentUser()
    // }
    // this.authService.getCurrentUser().subscribe({
    //   next: (response: any) => {
    //     this.message = response.email;
    //   },
    //   error: () => {
    //     alert('invalid user')
    //   }
    // });
    // if (!this.authService.userMail) { this.authService.getCurrentUser(); }

    // this.authService.getCurrentUser()
    //   .subscribe({
    //     next: (response: any) => {
    //       this.message = `Hi ${response.email}`;
    //     },
    //     error: () => {
    //       this.message = "You are not logged in";
    //     }
    //   })


  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    changes['message'].currentValue


  }

}
