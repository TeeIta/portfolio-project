import { Component, signal, ChangeDetectionStrategy} from '@angular/core';
import { PaymentGateway } from "../payment-gateway/payment-gateway";
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form-module',
  imports: [PaymentGateway, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-module.html',
  styleUrl: './form-module.css',
})
export class FormModule {
  dispayPaymentMethod = signal<boolean>(false);
formData = {
  fullName: '',
  lastName: '',
  email: '',
  phone: '',
  type: '',
  date: '',
  amount: 5000,
};

close() {
throw new Error('Method not implemented.');
}

handleSubmit() {
  console.log('Form Data:', this.formData);
  this.dispayPaymentMethod.set(true);
}


}