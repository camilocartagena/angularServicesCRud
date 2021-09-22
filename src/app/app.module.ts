import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddServicioComponent } from "./components/add-servicio/add-servicio.component";
import { ServicioDetailsComponent } from "./components/servicio-details/servicio-details.component";
import { ServiciosListComponent } from "./components/servicios-list/servicios-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AddServicioComponent,
    ServiciosListComponent,
    ServicioDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
