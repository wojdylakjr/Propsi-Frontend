import { Component, OnInit } from '@angular/core';
import { IOwner } from 'src/app/models/owner.model';
import { IPremises } from 'src/app/models/premises.model';
import { IProperty } from 'src/app/models/property.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { PropertyService } from '../../properties/property.service';
import { PremisesService } from '../premises.service';

@Component({
  selector: 'app-premises-list',
  templateUrl: './premises-list.component.html',
  styleUrls: ['./premises-list.component.scss']
})
export class PremisesListComponent implements OnInit {
  owner: IOwner = {};

  premises!: IPremises[];
  displayColumns: string[] = ["id", "name", "property", "status", "action"]

  constructor(private premisesService: PremisesService, private userService: UserManagementService) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.getOwnerProperties();
  }


  getOwnerProperties() {
    this.premisesService.getAllOwnerPremises(this.owner.id!)
      .subscribe({
        next: (response) => {
          this.premises = response;
          console.log("Premises read succsefully");
        },
        error: () => {
          alert("Error while geting premises")
        }
      })
  }


  RemoveProperty(arg0: any) {
    throw new Error('Method not implemented.');
  }
  openProperty(propertyId: number) {
    console.log(propertyId);
  }
  AddNewProperty(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
