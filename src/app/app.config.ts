import { ApplicationConfig, provideBrowserGlobalErrorListeners, NgModule, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { Angular4PaystackModule } from 'angular4-paystack';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { env } from './environment/env';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    importProvidersFrom(
          Angular4PaystackModule.forRoot(env.paystackPublicKey),

    )
  ]
};
