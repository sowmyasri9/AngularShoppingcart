import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  setPaymentButton: boolean = true;
  products = [];
  isFav:string="basic";
  selectedItemsIds =[]

  constructor(private apiService: ApiService,private routes :Router) {

  }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    })
  }
  addToCart(id) {
    var selectedId;
    for (var i = 0; i < this.products.length; i++) {
      selectedId = id - 1;
      this.selectedItemsIds.push(this.products[selectedId]);
      this.setPaymentButton = false;
      break;
    }
  }
  proceedToCheck() {
var myObj=this.selectedItemsIds;
sessionStorage.setItem('selectedItems',JSON.stringify(myObj));
this.routes.navigate(['/check-items']);
  }
  onRefresh(){
    window.location.reload();
  }
 
}
