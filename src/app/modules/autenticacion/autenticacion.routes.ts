import type { Routes } from '@angular/router';
import { AutenticacionSection } from '@constants/router.constants';
import { PublicLayoutComponent } from '@layout/public/public-layout.component';

export const AutenticacionRoutes: Routes = [
  {
    path: AutenticacionSection.InicioSesion,
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () =>
          import('./inicio-sesion/inicio-sesion.component').then(
            (module) => module.InicioSesionComponent
          ),
      },
      {
        path: AutenticacionSection.Token,
        loadComponent: async () =>
          import('./token/token.component').then((module) => module.TokenComponent),
      },
    ],
  },
];
