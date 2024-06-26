import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { elementAt, first } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
/**
 *
 */
 orders : any = [];
 designs: any = [];
 productions:any = [];
 qualityAssurances : any = [];
 deliveredOrders: any = [];
 cancelledOrders : any = []
 
constructor(private http: HttpClient, private router:Router, private homeservice:HomeService) {
 
}

ngOnInit(): void {
   this.getHomeData();
}
getHomeData(){
  
  this.homeservice.GetOrders(1,10)
  .subscribe((res : any): void =>{
    this.orders = res.Items.$values;
    console.log(this.orders);
  });

  this.homeservice.GetDesigns(1, 10)
  .subscribe((res : any) =>{
    this.designs = res.Items.$values;
    console.log("this is desing array");
    console.log(this.designs);
  });

  this.homeservice.GetProductions(1, 10)
  .subscribe((res : any) =>{
    this.productions = res.Items.$values;
    console.log("this is desing array");
    console.log(this.productions);
  });

    this.homeservice.GetQualityAssurances(1, 10)
  .subscribe((res : any) =>{
    this.qualityAssurances = res.Items.$values;
    console.log("this is desing array");
    console.log(this.qualityAssurances);
  });

}
async openOrderDetailPage(){
  this.router.navigateByUrl('/orderdetails');
}
}
