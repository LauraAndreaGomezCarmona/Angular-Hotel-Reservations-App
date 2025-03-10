import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { AppComponent } from "./app.component";
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    RouterModule,
    BrowserModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
