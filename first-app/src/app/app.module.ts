import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponentComponent } from './server-component/server-component.component';
import { ServersComponentComponent } from './servers-component/servers-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { Assigment3ComponentComponent } from './assigment3-component/assigment3-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponentComponent,
    ServersComponentComponent,
    UserComponentComponent,
    Assigment3ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
