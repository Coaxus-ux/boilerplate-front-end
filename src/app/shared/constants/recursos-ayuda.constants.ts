export type Recurso = {
  titulo: string;
  url: string;
  enlaceExterno: boolean;
}

export const RecursosAyuda: Record<string, Recurso> = {
  TiposUsuario: {
    titulo: 'Tipos de usuario',
    url: '/tipos-usuario',
    enlaceExterno: false,
  },
  Instructivo: {
    titulo: 'Instructivo',
    url: '/instructivo',
    enlaceExterno: false,
  },
  SoporteTecnico: {
    titulo: 'Soporte técnico',
    url: '/soporte-tecnico',
    enlaceExterno: false,
  },
  PreguntasFrecuentes: {
    titulo: 'Preguntas frecuentes',
    url: '/preguntas-frecuentes',
    enlaceExterno: false,
  },
};
