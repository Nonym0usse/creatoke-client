import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MusicComponent} from "./music/music.component";
import {LoginComponent} from "./admin/login/login.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {CreateMusicComponent} from "./admin/create-music/create-music.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'musics', component: MusicComponent},
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/dashboard', component: DashboardComponent},
  {path: 'admin/create-music', component: CreateMusicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
