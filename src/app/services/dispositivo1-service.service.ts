import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Http } from '@angular/http';
//import { Response, ResponseContentType } from "@angular/http";
@Injectable()
export class Dispositivo1ServiceService{
  constructor(private http:HttpClient ) {}
  listar() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=1');
  }
  listarSuelo() {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=2');
  }
  guardar(item: Object) {
    return this.http.post('http://localhost/api/dispositivo1.php?opcion=3', item);
  } 
  modificar(item: Object) {
    return this.http.post('http://localhost/api/dispositivo1.php?opcion=4', item);
  }
  eliminar(id: number) {
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=5&id=' + id);
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

  temperaturaJ(){
    return this.http.get('http://localhost/api/dispositivo1.php?opcion=20');
 
  }
  downloadExcel(){
    let url = "your url/api"
    return this.http.get(url);
  }
  json(){
    return this.http.get('http://localhost/api/graficar/data.php');
  }
}

