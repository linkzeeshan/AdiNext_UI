import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
