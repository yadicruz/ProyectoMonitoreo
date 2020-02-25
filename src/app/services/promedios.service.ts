import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PromediosService {

constructor(private http:HttpClient ) { 

}

promedioGeneralJ() {
 
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=1');
}

promedioJTem() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=2');
}
promedioJHum() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=3');
}
promedioGeneralF() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=4');
}
promedioFTem() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=5');
}
promedioFHum() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=6');
}
promedioJSue() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=7');
}
promedioFSue() {
  return this.http.get('http://localhost/api/promedioHora/promedioTemperatura.php?opcion=8');
}

}
