import { Component, OnInit } from "@angular/core";
import { ProductoService } from "src/app/services/producto.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-producto-details",
  templateUrl: "./producto-details.component.html",
  styleUrls: ["./producto-details.component.css"],
})
export class ProductoDetailsComponent implements OnInit {
  currentProducto: any;
  message = "";

  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = "";
    this.getProducto(this.route.snapshot.paramMap.get("codigoProducto"));
  }

  getProducto(codigoProducto: any): void {
    this.productoService.get(codigoProducto).subscribe(
      (data) => {
        this.currentProducto = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProducto(): void {
    this.productoService
      .update(this.currentProducto.codigoProducto, this.currentProducto)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = "The product was updated successfully!";
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteProducto(): void {
    this.productoService.delete(this.currentProducto.codigoProducto).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(["/productos"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
