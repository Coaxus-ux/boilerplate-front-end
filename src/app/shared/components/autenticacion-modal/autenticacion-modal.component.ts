import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autenticacion-modal',
  imports: [],
  templateUrl: './autenticacion-modal.component.html'
})
export class AutenticacionModalComponent {
  fechaActual = new Date().getFullYear();
  @Input() titulo = '';
  @Input() subtitulo = '';
}
