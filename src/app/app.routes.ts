import type { Routes } from '@angular/router';
import { AppSection } from '@constants/router.constants';
export const routes: Routes = [
  {
    path: AppSection.Login,
    loadChildren: async () =>
      import('./modules/autenticacion/autenticacion.routes').then(
        (module) => module.AutenticacionRoutes
      ),
  },
  {
    path: AppSection.Inicio,
    loadChildren: async () => import('./modules/inicio/inicio.routes').then(
      (module) => module.InicioRoutes
    ),
  },

];
