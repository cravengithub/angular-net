import { Routes } from '@angular/router';
import { Tasks } from './tasks/tasks';
import { TaskDetail } from './task-detail/task-detail';
export const routes: Routes = [
    { path: '', component: Tasks },
    { path: 'task/:id', component: TaskDetail }
];