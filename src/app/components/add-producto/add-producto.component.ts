import { Component, OnInit } from "@angular/core";
import { ProductoService } from "src/app/services/producto.service";

@Component({
  selector: "app-add-producto",
  templateUrl: "./add-producto.component.html",
  styleUrls: ["./add-producto.component.css"],
})
export class AddProductoComponent implements OnInit {
  message = "";
  url: any;

  producto = {
    nombreProducto: "",
    descripcionProducto: "",
    imagenProducto: "",
  };
  submitted = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.message = "";
  }

  viewImage(event: any) {
    this.message = "";
    this.url = event.target.value;
  }

  saveProducto(): void {
    const data = {
      nombreProducto: this.producto.nombreProducto,
      descripcionProducto: this.producto.descripcionProducto,
      imagenProducto: this.url,
    };

    this.productoService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newProducto(): void {
    this.submitted = false;
    this.url = "";
    this.producto = {
      nombreProducto: "",
      descripcionProducto: "",
      imagenProducto: "",
    };
  }
}
