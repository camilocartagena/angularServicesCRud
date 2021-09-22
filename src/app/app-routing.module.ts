import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiciosListComponent } from "./components/servicios-list/servicios-list.component";
import { ServicioDetailsComponent } from "./components/servicio-details/servicio-details.component";
import { AddServicioComponent } from "./components/add-servicio/add-servicio.component";
import { ProductosListComponent } from "./components/productos-list/productos-list.component";
import { ProductoDetailsComponent } from "./components/producto-details/producto-details.component";
import { AddProductoComponent } from "./components/add-producto/add-producto.component";

const routes: Routes = [
  { path: "", redirectTo: "servicios", pathMatch: "full" },
  { path: "servicios", component: ServiciosListComponent },
  { path: "servicios/:codigoServicio", component: ServicioDetailsComponent },
  { path: "addservicio", component: AddServicioComponent },
  { path: "productos", component: ProductosListComponent },
  { path: "productos/:codigoProducto", component: ProductoDetailsComponent },
  { path: "addproducto", component: AddProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
