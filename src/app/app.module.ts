import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/front/footer/footer.component';
import { HeaderComponent } from './components/front/header/header.component';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';

import { ReserverChambreComponent } from './components/front/reserver-chambre/reserver-chambre.component';
import { CommonModule } from '@angular/common';
import { ListeChambreComponent } from './components/front/liste-chambre/liste-chambre.component';

import { LoginComponent } from './components/front/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { NotFoundComponent } from './components/front/not-found/not-found.component';
import { LoginnameComponent } from './components/front/login/loginname/loginname.component';
import { UpdatebuttonComponent } from './components/front/login/updateprofil/updatebutton.component';
import {UpdateloginComponent} from "./components/front/login/updatelogin/updatelogin.component";
import { EmailDirective } from './components/front/login/email.directive';
import { AdminModule } from './components/back/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTemplateComponent,

    ReserverChambreComponent,
    ListeChambreComponent,
    

    LoginComponent,
    NotFoundComponent,
UpdateloginComponent,
    LoginnameComponent,
    UpdatebuttonComponent,
    EmailDirective,



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
