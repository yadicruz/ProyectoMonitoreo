import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Dispositivo1sensoService {
  constructor(private http:HttpClient ) {}
  listar() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=1');
  }
  mostrarUltimo() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=7');
  }
  fusion() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=6');
  }
  listarultimosen1() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=8');
  }
  listartodossen1(){
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=9');
  }
  listarultimosen2() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=10');
  }
  listartodossen2(){
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=11');
  }
  listarultimosen3() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=12');
  }
  listartodossen3(){
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=13');
  }
  listarultimosen4() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=14');
  }
  listartodossen4(){
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=15');
  }
  listarultimosen5() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=16');
  }
  listartodossen5(){
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=17');
  }

 
  }