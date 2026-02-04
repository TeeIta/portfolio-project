import { Component, inject, Input } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { FormModule } from '../form-module/form-module';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  private dialog = inject(Dialog);

  protected openModal() {
    this.dialog.open(FormModule
      , {
      width: '50vw',
      maxWidth: '90vw',
      height: '70vh',
      maxHeight: '50vh',
      backdropClass: 'cdk-overlay-dark-backdrop', 
      hasBackdrop: true
    });


    console.log("Function is running...");
  }
  @Input() messages: string[] = [];
  @Input() speed: string = '20s'; // Default speed
  @Input() bgColor: string = '#333'; // Default background
}
