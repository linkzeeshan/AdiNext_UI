import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-design',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent, HeaderComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private homeservice: HomeService) {

  }
  orders: any = [];
  designs: any = [];
  productions: any = [];
  qualityAssurances: any = [];
  deliveredOrders: any = [];
  cancelledOrders: any = []

  ngOnInit(): void {
    this.DesingPage();
  }
  DesingPage() {

    this.homeservice.GetDesigns(1, 10)
      .subscribe((res: any) => {
        this.designs = res.Items.$values;
      });
  }
  getHomeData() {

    this.homeservice.GetOrders(1, 10)
      .subscribe((res: any): void => {
        this.orders = res.Items.$values;
        console.log(this.orders);
      });

    this.homeservice.GetDesigns(1, 10)
      .subscribe((res: any) => {
        this.designs = res.Items.$values;
        console.log("this is desing array");
        console.log(this.designs);
      });

    this.homeservice.GetProductions(1, 10)
      .subscribe((res: any) => {
        this.productions = res.Items.$values;
        console.log("this is desing array");
        console.log(this.productions);
      });

    this.homeservice.GetQualityAssurances(1, 10)
      .subscribe((res: any) => {
        this.qualityAssurances = res.Items.$values;
        console.log("this is desing array");
        console.log(this.qualityAssurances);
      });

  }
  openOrderDetailPage() {
    this.router.navigateByUrl('/orderdetails');
  }
}
