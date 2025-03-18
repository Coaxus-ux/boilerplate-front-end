import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerta.component.html'
})
export class AlertComponent {
  @Input() message = '';
  @Input() isError = true;
  @Input() isVisible = false;

  get alertClasses(): string {
    return this.isError ? 'bg-error-light text-error' : 'bg-success-light text-success';
  }
}
