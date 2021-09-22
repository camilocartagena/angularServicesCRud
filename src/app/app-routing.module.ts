import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiciosListComponent } from "./components/servicios-list/servicios-list.component";
import { ServicioDetailsComponent } from "./components/servicio-details/servicio-details.component";
import { AddServicioComponent } from "./components/add-servicio/add-servicio.component";

const routes: Routes = [
  { path: "", redirectTo: "servicios", pathMatch: "full" },
  { path: "servicios", component: ServiciosListComponent },
  { path: "servicios/:codigoServicio", component: ServicioDetailsComponent },
  { path: "add", component: AddServicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
