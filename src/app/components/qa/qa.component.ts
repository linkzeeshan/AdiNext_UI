import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './qa.component.html',
  styleUrl: './qa.component.css'
})
export class QaComponent implements OnInit {
 qualityAssurances:any = [];
  constructor(private homeservice: HomeService) {
    
  }

ngOnInit(): void {
   this.GetOrderInQA();
}
GetOrderInQA(){

  this.homeservice.GetQualityAssurances(1, 10)
  .subscribe((res : any) =>{
    this.qualityAssurances = res.Items.$values;
  });
}
}
