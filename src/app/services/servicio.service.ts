import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = "http://127.0.0.1:8000/api/v1";

let headers = new HttpHeaders();
headers = headers.set("apiuser", "funeral").set("apipass", "dGVzdA==");

@Injectable({
  providedIn: "root",
})
export class ServicioService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    let path = "all-servicios";
    return this.http.get(`${baseUrl}/${path}`, {
      headers,
    });
  }
  get(codigoServicio: any): Observable<any> {
    let path = "validate-servicio";
    return this.http.get(`${baseUrl}/${path}/${codigoServicio}`, {
      headers,
    });
  }
  create(data: any): Observable<any> {
    let path = "store-servicio";
    return this.http.post(`${baseUrl}/${path}`, data, {
      headers,
    });
  }
  update(codigoServicio: any, data: any): Observable<any> {
    let path = "update-servicio";
    return this.http.post(`${baseUrl}/${path}/${codigoServicio}`, data, {
      headers,
    });
  }

  delete(codigoServicio: any): Observable<any> {
    let path = "destroy-servicio";
    return this.http.delete(`${baseUrl}/${path}/${codigoServicio}`, {
      headers,
    });
  }

  deleteAll(): Observable<any> {
    let path = "destroy-all-servicios";
    return this.http.delete(`${baseUrl}/${path}`, {
      headers,
    });
  }

  findByNombre(data: any): Observable<any> {
    let path = "find-nombre-servicio";
    return this.http.post(`${baseUrl}/${path}`, data, {
      headers,
    });
  }
}
