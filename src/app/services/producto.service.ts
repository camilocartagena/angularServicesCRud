import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = "http://127.0.0.1:8000/api/v1";

let headers = new HttpHeaders();
headers = headers.set("apiuser", "funeral").set("apipass", "dGVzdA==");

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let path = "all-productos";
    return this.http.get(`${baseUrl}/${path}`, {
      headers,
    });
  }
  get(codigoProducto: any): Observable<any> {
    let path = "validate-producto";
    return this.http.get(`${baseUrl}/${path}/${codigoProducto}`, {
      headers,
    });
  }
  create(data: any): Observable<any> {
    let path = "store-producto";
    return this.http.post(`${baseUrl}/${path}`, data, {
      headers,
    });
  }
  update(codigoProducto: any, data: any): Observable<any> {
    let path = "update-producto";
    return this.http.post(`${baseUrl}/${path}/${codigoProducto}`, data, {
      headers,
    });
  }

  delete(codigoProducto: any): Observable<any> {
    let path = "destroy-producto";
    return this.http.delete(`${baseUrl}/${path}/${codigoProducto}`, {
      headers,
    });
  }

  deleteAll(): Observable<any> {
    let path = "destroy-all-productos";
    return this.http.delete(`${baseUrl}/${path}`, {
      headers,
    });
  }

  findByNombre(data: any): Observable<any> {
    let path = "find-nombre-producto";
    return this.http.post(`${baseUrl}/${path}`, data, {
      headers,
    });
  }
}
