import { Component } from '@angular/core';
import { Actor } from '../../../modals/actor';
import { CustomersService } from '../../../services/customers.service';
import { CreateCustomer, CreateCustomerDto } from '../../../modals/create-customer';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-or-update-customer',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './create-or-update-customer.component.html',
  styleUrl: './create-or-update-customer.component.css'
})
export class CreateOrUpdateCustomerComponent {
  // Declare a variable of type CreateCustomer without initializing it
  newCustomer: CreateCustomerDto = new CreateCustomerDto(); 

  customers: CreateCustomerDto[] = [];

  constructor(private customerservice:CustomersService) {
    
  }
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  newActor() {
    this.model = new Actor(42, '', '');
  }
  heroine(): Actor {
    const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
    return myActress;
  }
  //////// NOT SHOWN IN DOCS ////////
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(actorForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Tom Cruise
  }
  /////////////////////////////
  addCustomer() {
    // Here you can send a POST request to your backend API to add a new customer
    // Replace 'api/addCustomer' with your actual endpoint to add customers
    this.customerservice.AddCustomer(this.newCustomer)
    .subscribe(
      (response: any) => {
        // Add the newly added customer to the list
        this.customers.push(response);
        // Clear the newCustomer object to reset the form fields
        this.newCustomer = new CreateCustomerDto();
      },
      (error: any) => {
        console.error('Error adding customer:', error);
      }
    );
  }
}
