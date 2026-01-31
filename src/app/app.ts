import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Marquee } from './shared/components/marquee/marquee';
import { Projects } from './projects/projects';
import { MyServices } from './my-services/my-services';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [Header, Marquee, MyServices, Projects, RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ita Tabitha Portfolio');
  
  myAlerts = [
    'Check your payment status in the portal'
  ];
}