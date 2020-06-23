import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = [];
  success: boolean = false;
  public loginObj = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private routes: Router) { }

  ngOnInit(): void {
    this.apiService.get().subscribe((data: any[]) => {

      this.login = data;

    })
  }
  onLogin(email, password) {


    for (var i = 0; i < this.login.length; i++) {
      if (email === this.login[i].email && password === this.login[i].password) {
        sessionStorage.setItem('username', "admin");
        this.success = true;
        this.routes.navigate(['/home']);
      }


    }
    if (this.success !== true) {
      this.routes.navigate(['/login']);
    }

  }

}
