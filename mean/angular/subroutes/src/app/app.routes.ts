import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { NotesPersonalComponent } from './notes/notes-personal/notes-personal.component';
import { NotesPublicComponent } from './notes/notes-public/notes-public.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'notes', component: NotesComponent, children: [
        { path: 'personal', component: NotesPersonalComponent },
        { path: 'public', component: NotesPublicComponent }
    ]  }
];
export const routing = RouterModule.forRoot(APP_ROUTES);