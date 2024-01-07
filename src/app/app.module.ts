import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/front/footer/footer.component';
import { HeaderComponent } from './components/front/header/header.component';
import { HomeComponent } from './components/front/home/home.component';
import { UserTemplateComponent } from './components/front/user-template/user-template.component';
import { UniversitesComponent } from './components/front/universites/universites.component';
import { UniversiteModule } from './components/back/universite/universite.module';
import { CardUnviComponent } from './components/front/universites/card-unvi/card-unvi.component';
import { DetailUnivComponent } from './components/front/universites/detail-univ/detail-univ.component';
import { AfficherchambresComponent } from './components/front/chambre/afficherchambres/afficherchambres.component';
import {DetailschambrerComponent} from "./components/front/chambre/detailschambre/detailschambrer.component";
import { CartchambreComponent } from './components/front/chambre/cartchambre/cartchambre.component';
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
import { NotFoundComponent } from './components/front/not-found/not-found.component';
import { LoginnameComponent } from './components/front/login/loginname/loginname.component';
import { UpdatebuttonComponent } from './components/front/login/updateprofil/updatebutton.component';
import {UpdateloginComponent} from "./components/front/login/updatelogin/updatelogin.component";
import { EmailDirective } from './components/front/login/email.directive';
import {AdminModule} from "./components/back/admin/admin.module";
import {NejdModuleModule} from "./components/back/nejd-module/nejd-module.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserTemplateComponent,
    UniversitesComponent,
    CardUnviComponent,
    DetailUnivComponent,
    AfficherchambresComponent,
    DetailschambrerComponent,
    CartchambreComponent,
    AfficherFoyerComponent,
    CardFoyerComponent,
    FoyerDetailsComponent,
    BlocComponent,
    DetailblocComponent,
    CouleurChambreDirective,
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
    UniversiteModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    NejdModuleModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
