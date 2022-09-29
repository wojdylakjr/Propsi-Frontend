import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
// import {MatSideList} from '@angular/material'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
