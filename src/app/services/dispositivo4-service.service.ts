import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable()
export class Dispositivo4ServiceService{
  constructor(private http:HttpClient ) {}
  listar() {
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=1');
  }
  listarultimosen1() {
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=8');
  }
  listartodossen1(){
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=9');
  }
  listarultimosen2() {
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=10');
  }
  listartodossen2(){
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=11');
  }
  listarultimosen3() {
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=12');
  }
  listartodossen3(){
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=13');
  }
  listarultimosen4() {
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=14');
  }
  listartodossen4(){
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=15');
  }
  listarultimosen5() {
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=16');
  }
  listartodossen5(){
    return this.http.get('http://localhost/api/dispositivo4.php?opcion=17');
  }
}
