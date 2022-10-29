import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IOwner } from 'src/app/models/owner.model';
import { IPremises } from 'src/app/models/premises.model';
import { ITenant } from 'src/app/models/tenant.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.scss']
})
export class AddRentalComponent implements OnInit {
  addRentalForm!: FormGroup;
  //TODO: check if needed
  owner: IOwner = {};
  costsPart: number = 0;

  tenants?: ITenant[];
  premises?: IPremises[];

  constructor(private userService: UserManagementService, private rentalService: RentalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.loadTenants();
    this.loadOwnerPremises();
    this.addRentalForm = this.formBuilder.group({
      name: [''],
      rentPrice: [''],
      rentalStartDate: Date,
      rentalEndDate: Date,
      costsPart: [],
      paymentDay: [],
      tenantId: [''],
      premisesId: ['']
    })
  }



  saveRental() {
    console.log(this.addRentalForm.value);
    // this.propertyService.saveProperty(this.addPropertyForm, this.owner.id!);
    if (this.addRentalForm.valid) {
      this.rentalService.create(this.addRentalForm.value)
        .subscribe({
          next: (response) => {
            console.log("Rental saved succsefully");
          },
          error: () => {
            alert("Error while saving new rental")
          }
        })
    }
  }

  loadOwnerPremises() {
    this.rentalService.getOwnerPremises(this.owner.id!)
      .subscribe({
        next: (response) => {
          this.premises = response;
          console.log("Premises readed sucsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

  loadTenants() {
    this.rentalService.getAllTenants()
      .subscribe({
        next: (response) => {
          this.tenants = response;
          console.log("Tenants readed sucsefully");
        },
        error: () => {
          alert("Error while geting properties")
        }
      })
  }

}

