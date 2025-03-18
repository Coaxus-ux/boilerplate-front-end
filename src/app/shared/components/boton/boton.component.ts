import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { VarianteBoton, Direccion } from '@shared/interfaces';
@Component({
  selector: 'app-boton',
  imports: [CommonModule, RouterModule],
  templateUrl: './boton.component.html',
  standalone: true,
})
export class BotonComponent {
  @Input() variante!: VarianteBoton;
  @Input() enlaceRuta?: string;
  @Input() cargando = false;
  @Input() deshabilitado = false;
  @Input() texto!: string;
  @Input() icono?: string;
  @Input() posicionIcono!: Direccion;
  @Input() textoCargando?: string;
  @Input() soloEnHover = false;
  @Input() enlaceExterno = false;
}
