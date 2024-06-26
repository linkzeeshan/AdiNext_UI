import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-design',
  standalone: true,
  imports: [RouterLinkActive, NavbarComponent,HeaderComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent implements OnInit {
constructor(private http: HttpClient, private homeservice:HomeService) {
 
}
designs: any = [];
ngOnInit(): void {
   this.DesingPage();
}
DesingPage(){

  this.homeservice.GetDesigns(1, 10)
  .subscribe((res : any) =>{
    this.designs = res.Items.$values;
  });
}
}
