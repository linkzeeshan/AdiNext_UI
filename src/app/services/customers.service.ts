import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

   constructor(private env: EnvService, private http: HttpClient) { }

GetCustomer(pagenumber: number,  pagesize: number){
  let url = this.env.apiUrl + "api/Account/GetCustomers?pagenumber="+pagenumber+"&pagesize="+pagesize;
  return this.http.get(url);
}

AddCustomer(newCustomer: any){
  let url = this.env.apiUrl + "api/Account/GetCustomers";
  return this.http.post(url, newCustomer);
}
}
