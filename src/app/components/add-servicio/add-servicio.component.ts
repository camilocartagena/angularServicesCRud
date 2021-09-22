import { Component, OnInit } from "@angular/core";
import { ServicioService } from "src/app/services/servicio.service";

@Component({
  selector: "app-add-servicio",
  templateUrl: "./add-servicio.component.html",
  styleUrls: ["./add-servicio.component.css"],
})
export class AddServicioComponent implements OnInit {
  message = "";
  url: any;

  servicio = {
    nombreServicio: "",
    descripcionServicio: "",
    imagenServicio: "",
  };
  submitted = false;

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.message = "";
  }

  viewImage(event: any) {
    this.message = "";
    console.log(event.target.value);
    this.url = event.target.value;
  }

  saveServicio(): void {
    const data = {
      nombreServicio: this.servicio.nombreServicio,
      descripcionServicio: this.servicio.descripcionServicio,
      imagenServicio: this.url,
    };

    this.servicioService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newServicio(): void {
    this.submitted = false;
    this.url = "";
    this.servicio = {
      nombreServicio: "",
      descripcionServicio: "",
      imagenServicio: "",
    };
  }
}
