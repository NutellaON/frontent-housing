import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HousesComponent } from './components/houses/houses.component';
import { HeadingComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HeadingComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    ApartmentsComponent,
    ResidentsComponent,
    HouseDetailsComponent,
    ApartmentDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AuthModule.forRoot({
      domain: 'dev-lsfrdt2onjhafe80.us.auth0.com',
      clientId: 'zmCYIZ6yD8CaTFi8wb0fl9ZhEivubqCG',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
