import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hire-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hire-form.html',
  styleUrls: ['./hire-form.css']
})
export class HireForm {
  submitted = false;

  formData = {
    fullName: '',
    email: '',
    project: '',
    message: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // This is where you'd normally call an API service
    console.log('Form Submitted!', this.formData);
    this.submitted = true;
  }

  onClose() {
    this.router.navigate(['/']);
  }
}