import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class SensorServiceService{
  constructor(private http:HttpClient ) {}
  listar() {
    return this.http.get('http://localhost/api/sensores.php?opcion=1');
  }
  detallar(id: number) {
    return this.http.get('http://localhost/api/sensores.php?opcion=2&id=' + id);
  }
  guardar(item: Object) {
    return this.http.post('http://localhost/api/sensores.php?opcion=3', item);
  } 
  modificar(item: Object) {
    return this.http.post('http://localhost/api/sensores.php?opcion=4', item);
  }
  eliminar(id: number) {
    return this.http.get('http://localhost/api/sensores.php?opcion=5&id=' + id);
  }
}
