import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withRouterConfig,
    withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { usersReducer } from 'state/users/users.reducer';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { UserEffects } from 'state/users/user.effects';
import { ApiService } from 'services/api.service';
import { HttpService } from 'common-services/src/http.service';
import { UserService } from 'services/user.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            appRoutes,
            withComponentInputBinding(),
            withRouterConfig({
                onSameUrlNavigation: 'reload',
                paramsInheritanceStrategy: 'always',
            }),
            withViewTransitions(),
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
            })
        ),
        provideAnimationsAsync(),
        provideStore({ users: usersReducer}),
        provideEffects([UserEffects]),
        ApiService,
        HttpService,
        UserService
    ],
};
