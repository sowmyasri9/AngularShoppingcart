import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login:boolean=true;

  constructor( private routes: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('username')== null){
     
      this.login=false;
        }
     
  }
  onLogout(){
    this.login=false;
    sessionStorage.clear();
    this.routes.navigate(['/login']);
  }
    
  }




