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
import { UniversitesComponent } from './components/front/universites/universites.component';
import { AdminModule } from './components/back/admin/admin.module';
import { UniversiteModule } from './components/back/universite/universite.module';
import { CardUnviComponent } from './components/front/universites/card-unvi/card-unvi.component';
import { DetailUnivComponent } from './components/front/universites/detail-univ/detail-univ.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTemplateComponent,
    UniversitesComponent,
    CardUnviComponent,
    DetailUnivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    UniversiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
