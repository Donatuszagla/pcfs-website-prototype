import { Media } from './media/media';
import { Events } from './events/events';
import { Branches } from './branches/branches';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'branches', component: Branches },
    { path: 'Events', component: Events },
    { path: 'Media', component: Media },
];
