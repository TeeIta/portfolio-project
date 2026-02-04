import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-gateway',
  imports: [],
  templateUrl: './payment-gateway.html',
  styleUrl: './payment-gateway.css',
})
export class PaymentGateway {
public reference = "";

paymentData = {
  email : "info@gmail.com",
  amount : 50000,
  publicKey : "sk_test_7600396833d7c5db8b62c280de348308678368b9"
}

constructor(){
  this.generateReference();
}

generateReference(): void {
  this.reference = `REF-${Math.floor(Math.random() * 1000000)}-${new Date().getTime()}`;
}

paymentDone(event:any){
  console.log("Sucess!", event)
  this.generateReference
}

paymentCancel(){
  console.log("User closed modal")
  this.generateReference();
}
}