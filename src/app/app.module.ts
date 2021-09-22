import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AddServicioComponent } from "./components/add-servicio/add-servicio.component";
import { ServicioDetailsComponent } from "./components/servicio-details/servicio-details.component";
import { ServiciosListComponent } from "./components/servicios-list/servicios-list.component";

import { AddProductoComponent } from "./components/add-producto/add-producto.component";
import { ProductosListComponent } from "./components/productos-list/productos-list.component";
import { ProductoDetailsComponent } from "./components/producto-details/producto-details.component";

@NgModule({
  declarations: [
    AppComponent,
    AddServicioComponent,
    ServiciosListComponent,
    ServicioDetailsComponent,
    AddProductoComponent,
    ProductosListComponent,
    ProductoDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
