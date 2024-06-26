import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-production',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './production.component.html',
  styleUrl: './production.component.css'
})
export class ProductionComponent implements OnInit{
productions:any = [];
constructor(private router:Router, private homeservice:HomeService) {
  
}
ngOnInit(): void {
   this.GetOrderInProduction();
}
GetOrderInProduction(){

  this.homeservice.GetProductions(1, 10)
  .subscribe((res : any) =>{
    this.productions = res.Items.$values;
  });
}

}
