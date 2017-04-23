import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendCreateComponent } from './friends/friend-create/friend-create.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendShowComponent } from './friends/friend-show/friend-show.component';
import { FriendEditComponent } from './friends/friend-edit/friend-edit.component';
import { FriendService } from './friends/friend.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendCreateComponent,
    FriendListComponent,
    FriendShowComponent,
    FriendEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
