import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-items',
  templateUrl: './check-items.component.html',
  styleUrls: ['./check-items.component.css']
})
export class CheckItemsComponent implements OnInit {
  checkedItems = [];
  onDeletionItems = [];
  paymentAmount: number = 0;
  afterdeletion: boolean = false;

  constructor(private routes: Router) {
   }

  ngOnInit(): void {
    this.checkedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
  }
  deleteFromCart(id) {
    for (var i = 0; i < this.checkedItems.length; i++) {
      var i = 0;
      if ((this.checkedItems[i].id) == id) {
        this.checkedItems.splice(i, 1);
        sessionStorage.setItem('onDeletionItems', JSON.stringify(this.checkedItems));
        this.afterdeletion = true;
        break;
      }

    }

  }
  proceedToPay() {
    if (this.afterdeletion) {
      this.onDeletionItems = JSON.parse(sessionStorage.getItem('onDeletionItems'));
      console.log(this.onDeletionItems);
      for (var i = 0; i < this.onDeletionItems.length; i++) {
        this.paymentAmount = this.paymentAmount + parseInt(this.onDeletionItems[i].price)

      }
      sessionStorage.setItem('paymentDetails',JSON.stringify(this.paymentAmount));
      console.log(this.paymentAmount);
      this.routes.navigate(['/payment']);
    }
    else {
      this.checkedItems = JSON.parse(sessionStorage.getItem('selectedItems'));
      console.log(this.checkedItems);


      for (var i = 0; i < this.checkedItems.length; i++) {
        this.paymentAmount = this.paymentAmount + parseInt (this.checkedItems[i].price)

      }
      sessionStorage.setItem('paymentDetails',JSON.stringify(this.paymentAmount));
      console.log(this.paymentAmount);
      this.routes.navigate(['/payment']);
    }
  }

}
