import { Component, OnInit } from "@angular/core";
import { ServicioService } from "src/app/services/servicio.service";

@Component({
  selector: "app-servicios-list",
  templateUrl: "./servicios-list.component.html",
  styleUrls: ["./servicios-list.component.css"],
})
export class ServiciosListComponent implements OnInit {
  servicios: any;
  currentServicio: any;
  currentIndex = -1;
  nombreServicio = "";

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.servicioService.getAll().subscribe(
      (data) => {
        this.servicios = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.obtenerServicios();
    this.currentServicio = "";
    this.currentIndex = -1;
  }

  setActiveServicio(servicio: any, index: any): void {
    this.currentServicio = servicio;
    this.currentIndex = index;
  }

  removeAllServicios(): void {
    this.servicioService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchNombreServicio(): void {
    const info = {
      nombreServicio: this.nombreServicio,
    };

    this.servicioService.findByNombre(info).subscribe(
      (data) => {
        this.servicios = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
