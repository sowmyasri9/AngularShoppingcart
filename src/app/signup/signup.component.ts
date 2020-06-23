import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signin = [];
  json = { id:"", email: "", password: "" };
  public signObj = {
    email: '',
    password: ''
  };
  constructor(private apiService: ApiService,private routes:Router) { }

  ngOnInit(): void {
    this.apiService.get().subscribe((data: any[]) => {

      this.signin = data;

    })
  }

  onSignup(email, password) {
    var len = this.signin.length+1;
    this.json.email = email;
    this.json.password = password;
    this.json.id = len.toString();
    if(this.json.email!==""&&this.json.password!==""){
      this.apiService.post(this.json).subscribe(
        res => {
          console.log(res);
        }
      );

      this.routes.navigate(['/login']);
    }
   
  }


}
