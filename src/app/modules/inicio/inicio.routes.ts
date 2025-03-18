import type { Routes } from '@angular/router';
import { PrivateSection } from '@constants/router.constants';
import { PrivateLayoutComponent } from '@layout/private/private-layout.component';
export const InicioRoutes: Routes = [
  {
    path: PrivateSection.Principal,
    component: PrivateLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () => 
          import('./principal/principal.component').then(
            (module) => module.PrincipalComponent
          ),
      },
    ],
  },
];
