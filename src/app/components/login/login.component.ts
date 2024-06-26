

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { Router } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  /**
   *
   */
  ngOnInit(): void {
    
  }
   loginDto = {
    "Email": "shan@example.com",
    "Password": "Z.a785785"
  }
  constructor(private router: Router,
    private http: HttpClient
  ) {
  }
  email = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(6)
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  login() {
    //const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that item.
    //this.router.navigate(['/heroes', { id: heroId }]);
    
    this.router.navigate(['/home']);
  }
  onLogin(){
this.http.post('https://localhost:44346/api/Account/Login', this.loginDto)
.subscribe((res:any) =>
{
  if(res.Flag){
    console.log(res.Token);
    localStorage.setItem('token', res.Token);
    this.router.navigateByUrl('/home');
  }
}
)
  }
}
