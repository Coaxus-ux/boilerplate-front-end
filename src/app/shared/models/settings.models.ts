export type AjustesApiDTO = {
  ruta: string;
}

export type AjustesPerfilDTO = {
  nombreAplicacion: string;
  descripcionAplicacion: string;
  oficina: string;
}
export type SeguridadDTO = {
  segundaClave: boolean;
  token: boolean;
}
export type AjustesDTO = {
  api: AjustesApiDTO;
  perfil: AjustesPerfilDTO;
  seguridad: SeguridadDTO;
}

export class Ajustes {
  api: AjustesApiDTO;
  perfil: AjustesPerfilDTO;
  seguridad: SeguridadDTO;

  constructor({ api, perfil, seguridad }: AjustesDTO) {
    this.api = api;
    this.perfil = perfil;
    this.seguridad = seguridad;
  }
}
