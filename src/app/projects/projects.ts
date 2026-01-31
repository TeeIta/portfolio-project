import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
currentRotation = 0;
  isDragging = false;
  startX = 0;
  baseRotation = 0;

  // 1. Capture the start of the drag
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX;
    this.baseRotation = this.currentRotation;
  }

  // 2. Update rotation as the mouse moves
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const currentX = event.pageX;
    const diffX = currentX - this.startX;
    
    // Sensitivity: Divide by 5 for smooth control
    this.currentRotation = this.baseRotation + (diffX / 5);
  }

  // 3. Stop dragging
  @HostListener('window:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  showAlert(name: string) {
    alert(`Action for ${name}`);
  }
}
