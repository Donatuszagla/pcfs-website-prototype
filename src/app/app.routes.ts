import { Branches } from './branches/branches';
import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'branches', component: Branches }
];
