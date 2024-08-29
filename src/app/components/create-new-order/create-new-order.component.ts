import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-create-new-order',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent, HeaderComponent],
  templateUrl: './create-new-order.component.html',
  styleUrl: './create-new-order.component.css'
})
export class CreateNewOrderComponent {

}
