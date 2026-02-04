import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MyServices } from "../my-services/my-services";

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  onHireMeClick() {
  // alert("Button was definitely clicked!");
  this.router.navigate(['/hire-me']).then(success => {
    if (success) {
      console.log("Navigation successful!");
    } else {
      console.log("Navigation failed!");
    }
  }).catch(err => {
    console.error("Router Error:", err);
  });
}










  // private dialog = inject(Dialog);
  
  //   protected openModal() {
  //     this.dialog.open(FormModule
  //       , {
  //       width: '50vw',
  //       maxWidth: '90vw',
  //       height: '70vh',
  //       maxHeight: '50vh',
  //       backdropClass: 'cdk-overlay-dark-backdrop', 
  //       hasBackdrop: true
  //     });
  
  
  //     console.log("Function is running...");
  //   }
}