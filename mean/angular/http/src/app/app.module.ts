import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksCreateComponent } from './tasks/tasks-create/tasks-create.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksCreateComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
