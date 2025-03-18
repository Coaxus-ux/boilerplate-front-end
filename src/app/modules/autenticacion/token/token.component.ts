import type { OnInit} from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputFormsComponent } from '@components/input-forms/input-forms.component';
import { AutenticacionModalComponent } from '@components/autenticacion-modal/autenticacion-modal.component';
import { BotonComponent } from '@components/boton/boton.component';
import { InputOtp } from 'primeng/inputotp';
import { AlertComponent } from '@components/alerta/alerta.component';
import { AjustesService } from '@shared/services';


@Component({
  selector: 'app-token',
  imports: [
    FormsModule,
    InputFormsComponent,
    CommonModule,
    AutenticacionModalComponent,
    InputOtp,
    BotonComponent,
    AlertComponent
  ],
  templateUrl: './token.component.html',
  standalone: true,
})
export class TokenComponent implements OnInit {
  
  // Código de verificación y sus estados
  codigo = '';
  errorCodigo = false;
  codigoEnviado = false;
  temporizadorReenvioCodigo = 0;

  // Estado para la segunda clave (si se requiere)
  requerirSegundaClave = true;
  segundaClave = '';

  cargando = false;

  @Output() volverAlInicio = new EventEmitter<void>();
  @Output() codigoVerificado = new EventEmitter<{
    codigo: string;
    segundaClave?: string;
  }>();

  constructor(private readonly ajustesService: AjustesService) {
    console.log('TokenComponent');
  }

  ngOnInit(): void {
    this.requerirSegundaClave = this.ajustesService.get().seguridad.segundaClave;
  }

  /**
   * Si no se requiere la segunda clave, se envía automáticamente al completar el código.
   */
  manejarCodigoCompleto(evento: Event): void {
    const valorCodigo = (evento as any).value;
    if (!this.requerirSegundaClave && valorCodigo.length === 5 && /^[\dA-Za-z]+$/.test(valorCodigo)) {
      this.enviarCodigo();
    }
  }

  /**
   * Se invoca al enviar el formulario (por ejemplo, cuando se requiere la segunda clave).
   */
  manejarEnvioCodigo(evento: Event): void {
    evento.preventDefault();
    this.enviarCodigo();
  }

  /**
   * Envía el código verificando que tenga 5 caracteres válidos y,
   * si es necesario, que la segunda clave tenga al menos 4 caracteres.
   */
  enviarCodigo(): void {
    this.cargando = true;
    this.errorCodigo = false;
    setTimeout(() => {
      if (
        this.codigo.length === 5 &&
        /^[\dA-Za-z]+$/.test(this.codigo) &&
        (!this.requerirSegundaClave || this.segundaClave.length >= 4)
      ) {
        this.codigoVerificado.emit({
          codigo: this.codigo,
          segundaClave: this.requerirSegundaClave ? this.segundaClave : undefined,
        });
      } else {
        this.errorCodigo = true;
      }
      this.cargando = false;
    }, 800);
  }

  // Simula el reenvío del código
  reenviarCodigo(): void {
    this.cargando = true;
    setTimeout(() => {
      this.codigoEnviado = true;
      this.iniciarTemporizadorReenvio();
      this.cargando = false;
    }, 800);
  }

  // Deshabilita el botón de envío si se está cargando, si el código no tiene 5 caracteres,
  // o si la segunda clave (cuando es requerida) es muy corta.
  get botonDeshabilitado(): boolean {
    return (
      this.cargando ||
      this.codigo.length !== 5 ||
      (this.requerirSegundaClave && this.segundaClave.length < 4)
    );
  }

  // Inicia un temporizador de reenvío de 120 segundos.
  iniciarTemporizadorReenvio(): void {
    this.temporizadorReenvioCodigo = 120;
    const intervalo = setInterval(() => {
      if (this.temporizadorReenvioCodigo <= 1) {
        clearInterval(intervalo);
        this.temporizadorReenvioCodigo = 0;
      } else {
        this.temporizadorReenvioCodigo--;
      }
    }, 1000);
  }

  // Emite el evento para volver al inicio de sesión.
  regresar(): void {
    this.volverAlInicio.emit();
  }
}
