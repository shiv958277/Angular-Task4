import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainheaderComponent } from './application/mainheader/mainheader.component';
import { LoginComponent } from './application/login/login.component';

import {RouterModule,  Routes} from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'mainheader', component: MainheaderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    LoginComponent,
    RouterModule.forRoot(routes)
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  exports: [RouterModule],
  providers: [],

})
export class AppModule { }
