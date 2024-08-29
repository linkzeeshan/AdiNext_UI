import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { HomeService } from '../../services/home.service';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent, HeaderComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  Customers: any = [];

  constructor(private customerservice: CustomersService) {


  }
  ngOnInit(): void {
    this.GetOrderShipments();
  }
  GetOrderShipments() {

    this.customerservice.GetCustomer(1, 10)
      .subscribe((res: any) => {
        console.log(res);
        this.Customers = res.Data.$values;

      });
  }
  openOrderDetailPage() { }
}
