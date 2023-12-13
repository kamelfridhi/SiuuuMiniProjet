import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/front/footer/footer.component';
import { HeaderComponent } from './components/front/header/header.component';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AfficherFoyerComponent } from './components/front/foyer/afficher-foyer/afficher-foyer.component';
import { CardFoyerComponent } from './components/front/foyer/card-foyer/card-foyer.component';
import { FoyerDetailsComponent } from './components/front/foyer/foyer-details/foyer-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlocComponent } from './components/front/bloc/bloc/bloc.component';
import { DetailblocComponent } from './components/front/bloc/detailbloc/detailbloc.component';
import { CouleurChambreDirective } from './components/front/couleur-chambre.directive';


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

    AfficherFoyerComponent,
    CardFoyerComponent,
    FoyerDetailsComponent


    BlocComponent,
    DetailblocComponent,
    CouleurChambreDirective


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


   
    
 
    BrowserAnimationsModule

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule



  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
