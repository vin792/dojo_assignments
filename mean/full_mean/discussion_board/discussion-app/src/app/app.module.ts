import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDashboardComponent } from './topic/topic-dashboard/topic-dashboard.component';
import { TopicDashboardCreateComponent } from './topic/topic-dashboard/topic-dashboard-create/topic-dashboard-create.component';
import { TopicDashboardListComponent } from './topic/topic-dashboard/topic-dashboard-list/topic-dashboard-list.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';
import { TopicDetailsAnswerComponent } from './topic/topic-details/topic-details-answer/topic-details-answer.component';
import { TopicService } from './topic/topic.service';
import { LoginService } from './login/login.service';
import { UserDetailsComponent } from './topic/user-details/user-details.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopicComponent,
    TopicDashboardComponent,
    TopicDashboardCreateComponent,
    TopicDashboardListComponent,
    TopicDetailsComponent,
    TopicDetailsAnswerComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [TopicService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
