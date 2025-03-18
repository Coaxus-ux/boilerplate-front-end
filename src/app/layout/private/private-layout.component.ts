import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssetsService, AjustesService } from '@shared/services';
import { AssetImage } from '@shared/constants';
import type { AjustesPerfilDTO } from '@models/settings.models';

@Component({
  selector: 'app-public-layout',
  templateUrl: './private-layout.component.html',
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class PrivateLayoutComponent implements OnInit {
  logoUsco!: string;
  separador!: string;
  altaCalidadLogo!: string;
  perfilAplicacion!: AjustesPerfilDTO;

  private readonly assetsService: AssetsService;
  private readonly ajustesService: AjustesService;

  constructor(assetsService: AssetsService, ajustesService: AjustesService) {
    this.assetsService = assetsService;
    this.ajustesService = ajustesService;
  }

  ngOnInit(): void {
    this.logoUsco = this.assetsService.getImageUrl(AssetImage.LogoUsco);
    this.separador = this.assetsService.getImageUrl(AssetImage.Separador);
    this.altaCalidadLogo = this.assetsService.getImageUrl(AssetImage.AltaCalidadLogo);
    this.perfilAplicacion = this.ajustesService.get().perfil;
  }
}
