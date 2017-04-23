import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { NotesComponent } from './notes/notes.component';
import { TaskPublicComponent } from './task/task-public/task-public.component';
import { TaskPrivateComponent } from './task/task-private/task-private.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/task', pathMatch: 'full' },
    { path: 'task', component: TaskComponent, children: [
        { path: 'public', component: TaskPublicComponent },
        { path: 'private', component: TaskPrivateComponent },
        { path: ':id', component: TaskDetailsComponent }
    ] },
    { path: 'notes', component: NotesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);