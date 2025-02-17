import { Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileDetailsPageComponent } from './profile-details-page/profile-details-page.component';

export const appRoutes: Route[] = [
    { path: '', component: HomePageComponent },
    { path: 'users/:userId', component: ProfileDetailsPageComponent},
];
