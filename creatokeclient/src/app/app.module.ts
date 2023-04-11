import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateMusicComponent } from './admin/create-music/create-music.component';
import {ReactiveFormsModule} from "@angular/forms";
import {environment} from "../environments/environments";
import { initializeApp } from 'firebase/app';

const app = initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    CreateMusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
