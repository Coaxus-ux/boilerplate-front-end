import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import type {
  ControlValueAccessor} from '@angular/forms';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import type { InputType } from '@shared/interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-input-forms',
  host: { '[attr.name]': 'name || idCampo' },
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './input-forms.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormsComponent),
      multi: true,
    },
    
  ],
})
export class InputFormsComponent implements ControlValueAccessor {
  @Input() idCampo = '';
  @Input() name = '';
  @Input() etiqueta = '';
  @Input() placeholder = '';
  @Input() tipo: InputType = 'text';
  @Input() requerido = false;
  @Input() mensajeError = 'El valor ingresado no cumple los requisitos.';
  @Input() fnValidacion: ((valor: string) => boolean) | null = null;
  @Input() textoEnlace = '';
  @Input() enlaceRuta = '';
  @Input() icono = '';
  @Input() enlaceExterno = false;

  @Output() cambioValor = new EventEmitter<string>();

  valorInterno = '';
  tocado = false;
  deshabilitado = false;
  error = false;

  private alCambiar: (valor: string) => void = () => {};
  private alTocar: () => void = () => {};

  writeValue(valor: string): void {
    this.valorInterno = valor ?? '';
    this.verificarValidacion();
  }

  registerOnChange(function_: (valor: string) => void): void {
    this.alCambiar = function_;
  }

  registerOnTouched(function_: () => void): void {
    this.alTocar = function_;
  }

  setDisabledState(estaDeshabilitado: boolean): void {
    this.deshabilitado = estaDeshabilitado;
  }

  alInput(evento: Event): void {
    const objetivo = evento.target as HTMLInputElement;
    const valor = objetivo.value;
    this.valorInterno = valor;
    this.alCambiar(valor);
    this.cambioValor.emit(valor);
    this.verificarValidacion();
  }

  alBlur(): void {
    this.tocado = true;
    this.alTocar();
    this.verificarValidacion();
  }

  private verificarValidacion(): void {
    if (this.requerido && this.valorInterno.trim() === '') {
      this.error = true;
      return;
    }
    this.error = this.fnValidacion === null ? false : !this.fnValidacion(this.valorInterno);
  }
}
