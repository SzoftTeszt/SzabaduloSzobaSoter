import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { UjFoglalasComponent } from './uj-foglalas/uj-foglalas.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"foglalasok", component:FoglalasokComponent},
  {path:"ujfoglalas", component:UjFoglalasComponent},
  {path:"", component:HomeComponent},
  {path:"**", redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
