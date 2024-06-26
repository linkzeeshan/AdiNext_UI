import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-delivered',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './delivered.component.html',
  styleUrl: './delivered.component.css'
})
export class DeliveredComponent {

}
