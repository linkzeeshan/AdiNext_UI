import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit{
Shipments:any = [];

constructor(private homeservice:HomeService) {
  
  
}
ngOnInit(): void {
   this.GetOrderShipments();
}
GetOrderShipments(){

  this.homeservice.GetProductions(1, 10)
  .subscribe((res : any) =>{
    this.Shipments = res.Items.$values;
  });
}
}
