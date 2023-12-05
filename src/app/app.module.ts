import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/front/footer/footer.component';
import { HeaderComponent } from './components/front/header/header.component';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import { HttpClientModule } from '@angular/common/http';
import { AfficherchambresComponent } from './components/front/chambre/afficherchambres/afficherchambres.component';
import {DetailschambrerComponent} from "./components/front/chambre/detailschambre/detailschambrer.component";
import { CartchambreComponent } from './components/front/chambre/cartchambre/cartchambre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTemplateComponent,
    AfficherchambresComponent,
    DetailschambrerComponent,
    CartchambreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
