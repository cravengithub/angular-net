import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Tasks } from './tasks/tasks';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'tasks', component: Tasks }
];
