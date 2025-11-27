import { Media } from './media/media';
import { Events } from './events/events';
import { Branches } from './branches/branches';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Ministries } from './ministries/ministries';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'home', component: Home },
    { path: 'branches', component: Branches },
    { path: 'events', component: Events },
    { path: 'media', component: Media },
    {path: 'ministries', component: Ministries},
];
