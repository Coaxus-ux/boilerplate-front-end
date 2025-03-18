import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // haz una cuenta regresiva de 20 segundos
  public countdown = 20;
  constructor() {
    setInterval(() => {
      this.countdown--;
    }, 1000);
  }
}
