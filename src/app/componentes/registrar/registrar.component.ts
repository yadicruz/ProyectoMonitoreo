import { Component, OnInit } from '@angular/core';
import { LogeoServiceService } from '../../services/logeo-service.service';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";

import { HttpClient } from 'selenium-webdriver/http';
//import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Registrar',
  templateUrl: './Registrar.component.html',
  styleUrls:['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  
  


  item;



  constructor(private crudSensor:LogeoServiceService, private router : Router) { 
    this.item = {nombre: null};
    
  }

  guardar(){
    let formData = new FormData();
    formData.append('nombre', this.item.nombre);
    formData.append('usuario', this.item.usuario);
    formData.append('password', this.item.password);
    this.crudSensor.guardar(formData)
   
    .subscribe(
      (data) => {
        if(data === true){
          console.log("Registro Guardado con Exito");
          this.router.navigate(['login']);
          //this.router.navigate(['listado'], { queryParams: { page: this.page + 1 } })
        }else{
          console.log("Error al registrar");
          console.warn(data);
        }
      }, 
      (error) => console.log(error)
    );
  }

  

  

  ngOnInit() {
  }

}
