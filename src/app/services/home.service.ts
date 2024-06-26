import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from './env.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private env: EnvService, private http: HttpClient, private router:Router) { }

GetOrders(pagenumber: number,  pagesize: number){
  let url = this.env.apiUrl + "api/Order/GetAll?pagenumber="+pagenumber+"&pagesize="+pagesize;
  return this.http.get(url);
}

GetDesigns(pagenumber: number,  pagesize: number){
  let url = this.env.apiUrl + "api/Order/GeOrdersInDesigner?pagenumber="+pagenumber+"&pagesize="+pagesize;
  return this.http.get(url);
}

GetProductions(pagenumber: number,  pagesize: number){
  let url = this.env.apiUrl + "api/Order/GetProductions?pagenumber="+pagenumber+"&pagesize="+pagesize;
  return this.http.get(url);
}



GetQualityAssurances(pagenumber: number,  pagesize: number){
  let url = this.env.apiUrl + "api/Order/GetAllQA?pagenumber="+pagenumber+"&pagesize="+pagesize;
  return this.http.get(url);
}
}
