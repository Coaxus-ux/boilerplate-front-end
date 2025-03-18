import type { ApplicationConfig } from '@angular/core';
import { inject, Injector, provideAppInitializer, provideZoneChangeDetection, runInInjectionContext } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { TRANSLATIONS_ES } from '@assets/i18n/es';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Theme } from '@styles/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAppInitializer(async () => {
      const injector = inject(Injector);
      const module = await import('@services/settings/settings.service');
      return runInInjectionContext(injector, async () => {
        const settingsService = inject(module.AjustesService);
        return settingsService.init();
      });
    }),
    providePrimeNG({
      theme: {
        preset: Theme,
        options: {
          prefix: 'p',
          darkModeSelector: 'p-dark', 
          legacy: false,
          cssLayer: false,
        },
      },
      zIndex: {
        modal: 1100,   // Dialog, sidebar
        overlay: 1000, // Dropdown, overlaypanel
        menu: 1000,    // Overlay menus
        tooltip: 1100, // Tooltip
      },
      ripple: true,
      translation: TRANSLATIONS_ES,
    }),
  ],
};
