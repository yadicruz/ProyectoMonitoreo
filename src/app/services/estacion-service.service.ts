import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable()
export class EstacionServiceService{
  constructor(private http:HttpClient ) {}
  listar() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=1');
  }
  detallar(id: number) {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=2&id=' + id);
  }
  guardar(item: Object) {
    return this.http.post('http://localhost/api/estacionServicio.php?opcion=3', item);
  } 
  listarTemperatura() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=5');
  }
  listarHumedad() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=6');
  }
  listarRocio() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=7');
  }
  listarTemperaturaCOM() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=8');
  }
  listarHumedadCOM() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=9');
  }
  listarRocioCOM() {
    return this.http.get('http://localhost/api/estacionServicio.php?opcion=10');
  }
 
}
