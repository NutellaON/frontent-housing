import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HousesComponent } from './components/houses/houses.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'houses', component: HousesComponent },
  { path: 'houses/:id', component: HouseDetailsComponent },
  // { path: 'apartments/:id', component: ApartmentsComponent },
  { path: 'apartments/:id', component: ApartmentDetailsComponent },
  { path: 'resident/:id', component: ResidentsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
