import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
payment=0;
success:String="";
public addObj = {
  name: '',
  phone: '',
  address:'',
  state:'',
  country:'',
  pincode:''
};
  constructor() { }

  ngOnInit(): void {
this.payment=JSON.parse(sessionStorage.getItem('paymentDetails'));

  }
  onAddressSubmit(name,phone,address,state,country,pincode){
if(name!==""&&phone!==""&&address!==""&&state!==""&&country!==""&&pincode!==""){
  sessionStorage.setItem("address",JSON.stringify(this.addObj));
  this.success="Address Details Added Successfully!" 
}

  }

}
