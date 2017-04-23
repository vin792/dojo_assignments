import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDashboardComponent } from './topic/topic-dashboard/topic-dashboard.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';
import { UserDetailsComponent } from './topic/user-details/user-details.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: TopicDashboardComponent },
    { path: 'topic/:id', component: TopicDetailsComponent },
    { path: 'user/:id', component: UserDetailsComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);