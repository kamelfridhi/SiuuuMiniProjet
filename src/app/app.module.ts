import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/front/footer/footer.component';
import { HeaderComponent } from './components/front/header/header.component';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import { ReserverChambreComponent } from './components/front/reserver-chambre/reserver-chambre.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListeChambreComponent } from './components/front/liste-chambre/liste-chambre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTemplateComponent,
    ReserverChambreComponent,
    ListeChambreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
