import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Projects } from './projects/projects';
import { MyServices } from './my-services/my-services';
import { Footer } from './footer/footer';
import { About } from './about/about';
import { Landing } from "./landing/landing";
import { Testimonial } from './testimonial/testimonial';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [Header, About, MyServices, Projects, RouterOutlet, Footer,Testimonial], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ita Tabitha Portfolio');
  
  myAlerts = [
    'Check your payment status in the portal'
  ];
}