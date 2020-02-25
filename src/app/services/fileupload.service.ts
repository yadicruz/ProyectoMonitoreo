import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  URL = "http://localhost/api/";

  constructor(private http: HttpClient) { }

  uploadFile(archivo) {
    return this.http.post(`${this.URL}subirArchivo.php`, JSON.stringify(archivo));
  }
}
