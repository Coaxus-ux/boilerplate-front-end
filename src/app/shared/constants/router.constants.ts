export const APP_ROOT_ROUTE = '/';

export enum Router {
  Publico = 'public',
  Privado = 'primary' // Default
}

export enum AppSection {
  Publico = '/inicio-sesion',
  Inicio = '',
  Login = 'inicio-sesion',
}

export enum PrivateSection {
  Principal = 'principal',
}

export enum AutenticacionSection {
  InicioSesion = '',
  Token = 'token',
}
