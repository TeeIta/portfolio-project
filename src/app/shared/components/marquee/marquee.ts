import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-marquee',
  imports: [],
  templateUrl: './marquee.html',
  styleUrl: './marquee.css',
})
export class Marquee {
  @Input() messages: string[] = [];
  @Input() speed: string = '20s'; // Default speed
  @Input() bgColor: string = '#333'; // Default background
}

