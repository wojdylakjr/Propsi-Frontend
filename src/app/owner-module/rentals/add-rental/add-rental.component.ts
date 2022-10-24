import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IOwner } from 'src/app/models/owner.model';
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
  constructor(private userService: UserManagementService, private rentalService: RentalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.addRentalForm = this.formBuilder.group({
      name: [''],
      tenantId: [''],
      premisesId: [''],
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

}

