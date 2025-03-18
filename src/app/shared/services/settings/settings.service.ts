import { HttpClient as HttpClientRuntime } from '@angular/common/http';
import { Inject } from '@angular/core';
import type { HttpClient as HttpClientType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { AjustesDTO } from '@models/settings.models';
import { Ajustes } from '@models/settings.models';
import { catchError, lastValueFrom, tap } from 'rxjs';
import { cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AjustesService {
  private settings!: Ajustes;
  private ready!: boolean;
  private readonly http: HttpClientType;

  constructor(@Inject(HttpClientRuntime) http: HttpClientType) {
    this.http = http;
  }

  init = async (): Promise<Ajustes> => {
    if (this.ready) {
      return this.settings;
    }

    return lastValueFrom(
      this.http.get<AjustesDTO>('/assets/configuration/configuration.json').pipe(
        tap(settings => {
          this.settings = new Ajustes(settings);
          this.ready = true;
        }),
        catchError(error => {
          // Puedes reemplazar estos console.error por un servicio de logging si lo prefieres.
          throw error;
        })
      )
    );
  }

  get = (): Ajustes => cloneDeep(this.settings);
}
