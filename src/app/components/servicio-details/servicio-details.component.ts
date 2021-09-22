import { Component, OnInit } from "@angular/core";
import { ServicioService } from "src/app/services/servicio.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-servicio-details",
  templateUrl: "./servicio-details.component.html",
  styleUrls: ["./servicio-details.component.css"],
})
export class ServicioDetailsComponent implements OnInit {
  currentServicio: any;
  message = "";

  constructor(
    private servicioService: ServicioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.getServicio(this.route.snapshot.paramMap.get("codigoServicio"));
  }

  getServicio(codigoServicio: any): void {
    this.servicioService.get(codigoServicio).subscribe(
      (data) => {
        this.currentServicio = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateServicio(): void {
    this.servicioService
      .update(this.currentServicio.codigoServicio, this.currentServicio)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = "The service was updated successfully!";
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteServicio(): void {
    this.servicioService.delete(this.currentServicio.codigoServicio).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/servicios"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
