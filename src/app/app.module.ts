import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
