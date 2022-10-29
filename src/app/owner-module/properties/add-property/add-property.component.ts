import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IOwner } from 'src/app/models/owner.model';
import { IAddress } from 'src/app/models/address.model';
import { UserManagementService } from 'src/app/services/user.management.service';
import { OwnerService } from '../../owner.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  owner: IOwner = {};
  isSinglePremises = false;

  addPropertyForm!: FormGroup;
  constructor(private userService: UserManagementService, private propertyService: PropertyService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.owner.subscribe(owner => { this.owner = owner });
    this.addPropertyForm = this.formBuilder.group({
      name: [''],
      isSinglePremises: [this.isSinglePremises],
      address: this.formBuilder.group({
        city: [''],
        zipCode: [''],
        street: [''],
        streetNumber: [''],
        unitNumber: [''],
      }),
      premises: this.formBuilder.array([])
    })
  }

  premises(): FormArray {
    return this.addPropertyForm.get('premises') as FormArray;
  }


  // propertyPremises(empIndex: number): FormArray {
  //   return this.employees()
  //     .at(empIndex)
  //     .get('skills') as FormArray;
  // }

  newPremises(): FormGroup {
    return this.formBuilder.group({
      name: ''
    });
  }

  addPremisesToProperty() {
    this.premises().push(this.newPremises());
  }

  removePromisesFromProperty(skillIndex: number) {
    this.premises().removeAt(skillIndex);
  }


  SaveProperty() {
    console.log(this.addPropertyForm.value);
    // this.propertyService.saveProperty(this.addPropertyForm, this.owner.id!);
    if (this.addPropertyForm.valid) {
      this.propertyService.saveProperty(this.addPropertyForm.value, this.owner.id!)
        .subscribe({
          next: (response) => {
            console.log("Property saved succsefully");
          },
          error: () => {
            alert("Error while saving new user")
          }
        })
    }
  }
}
