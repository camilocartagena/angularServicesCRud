import { Component, OnInit } from "@angular/core";
import { ProductoService } from "src/app/services/producto.service";

@Component({
  selector: "app-productos-list",
  templateUrl: "./productos-list.component.html",
  styleUrls: ["./productos-list.component.css"],
})
export class ProductosListComponent implements OnInit {
  productos: any;
  currentProducto: any;
  currentIndex = -1;
  nombreProducto = "";

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getAll().subscribe(
      (data) => {
        this.productos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.obtenerProductos();
    this.currentProducto = "";
    this.currentIndex = -1;
  }

  setActiveProducto(producto: any, index: any): void {
    this.currentProducto = producto;
    this.currentIndex = index;
  }

  removeAllProductos(): void {
    this.productoService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchNombreProducto(): void {
    const info = {
      nombreServicio: this.nombreProducto,
    };

    this.productoService.findByNombre(info).subscribe(
      (data) => {
        this.productos = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
