import { Component, Input, OnInit } from '@angular/core';
import { Angular4PaystackModule } from 'angular4-paystack';

@Component({
  selector: 'app-payment-gateway',
  imports: [Angular4PaystackModule],
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

// generateReference(){
//   this.reference = 'ref-' + Math.random().toString(36).substring(2);
// }
generateReference(): void {
  // Adding a random string + high-res timestamp ensures it's never the same
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


// export class PaymentGateway implements OnInit {
  // @Input() payload: any;

  // ngOnInit(): void {
  //   console.log('Payload: ', this.payload);
    
  // }
  // paymentCancel(){
  //   console.log('Payment cancelled');
  // }

  // paymentDone(response: any){
  //   console.log('Payment successful', response);
  // }

//  get paymentRef() {  
//   return 'ref-' + Math.random().toString(36).substring(2, 15);
// }
// }

