import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products=[];
  
  constructor(private apiService: ApiService) {
  
   }
  
  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    })
  }
}
