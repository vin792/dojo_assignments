import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetCreateComponent } from './widgets/widget-create/widget-create.component';
import { WidgetListComponent } from './widgets/widget-list/widget-list.component';
import { WidgetEditComponent } from './widgets/widget-edit/widget-edit.component';
import { WidgetService } from './widgets/widget.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetCreateComponent,
    WidgetListComponent,
    WidgetEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
