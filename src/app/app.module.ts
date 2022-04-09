import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot([
      {path: 'myprofile', component: MyProfileComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
