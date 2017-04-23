import { Routes, RouterModule } from '@angular/router';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendCreateComponent } from './friends/friend-create/friend-create.component';
import { FriendShowComponent } from './friends/friend-show/friend-show.component';
import { FriendEditComponent } from './friends/friend-edit/friend-edit.component';


const APP_ROUTES: Routes = [
    { path: '', component: FriendListComponent},
    { path: 'new', component: FriendCreateComponent },
    { path: 'show/:id', component: FriendShowComponent },
    { path: 'edit/:id', component: FriendEditComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);