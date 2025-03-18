import { Component } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFormsComponent } from '@components/input-forms/input-forms.component';
import { BotonComponent } from '@components/boton/boton.component';
import type { Recurso } from '@shared/constants';
import { RecursosAyuda } from '@shared/constants';
import { AlertComponent } from '@components/alerta/alerta.component';
import { AutenticacionModalComponent } from '@components/autenticacion-modal/autenticacion-modal.component';
@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputFormsComponent,
    BotonComponent,
    AlertComponent,
    AutenticacionModalComponent,
  ],
  templateUrl: './inicio-sesion.component.html',
})
export class InicioSesionComponent {
  RecursosAyuda = RecursosAyuda;
  username = '';
  password = '';
  error = false;
  loading = false;
  currentYear = new Date().getFullYear();
  handleSubmit(event: Event): void {
    event.preventDefault();
    this.loading = true;
    console.log('Iniciar sesión con:', this.username, this.password);
    setTimeout(() => {
      this.error = !(this.username && this.password);
      this.loading = false;
    }, 800);
  }
  trackByKey(index: number, item: KeyValue<string, Recurso>): string {
    return item.key;
  }
}
