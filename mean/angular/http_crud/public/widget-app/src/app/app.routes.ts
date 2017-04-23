import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetListComponent } from './widgets/widget-list/widget-list.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/createwidget', pathMatch: 'full' },
    { path: 'createwidget', component: WidgetsComponent },
    { path: 'viewwidgets', component: WidgetListComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);