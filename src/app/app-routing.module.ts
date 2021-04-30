import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandComponent } from './land/land.component';

import { LoginComponent } from './login/login.component';
import { PenComponent } from './pen/pen.component';

import { RegisterComponent } from './register/register.component';
import {  WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:'login'
  },{
    component:RegisterComponent,
    path:'register'
  },{
    component:WelcomeComponent,
    path:'welcome'
  },{
    component:LandComponent,
    path:'land'
  },{
    component:PenComponent,
    path:'pen'
  },{
    component:HomeComponent,
    path:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
