import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TodolistRoutes } from './todolist/index';
import { LoginRoutes } from './login/index';
import { PostRoutes } from './post/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TodolistRoutes,
    ...LoginRoutes,
    ...PostRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
