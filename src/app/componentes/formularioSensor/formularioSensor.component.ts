import { Component, OnInit } from '@angular/core';
import { SensorServiceService } from '../../services/sensor-service.service';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-formularioSensor',
  templateUrl: './formularioSensor.component.html',
  styleUrls: ['./formularioSensor.component.css']
})
export class FormularioSensorComponent implements OnInit {

  item;

  unidades = [{id:1, nombre:"INTERNO"}, {id:2, nombre:"EXTERNO"}];
  variables = [{id:1, nombre:"TEMPERATURA"},{id:2, nombre:"HUMEDAD"}];
  
  constructor(private crudSensor:SensorServiceService, private router : Router) { 
    this.item = {nombresensor: null};
  }

  
  guardar(){
    let formData = new FormData();
    formData.append('nombresensor', this.item.nombresensor);
    formData.append('monitoreo_idmonitoreo', this.item.monitoreo_idmonitoreo);
    formData.append('variable_idvariable', this.item.variable_idvariable);
    this.crudSensor.guardar(formData)
    .subscribe(
      (data) => {
        if(data === true){
          console.log("Registro Guardado con Exito");
          this.router.navigate(['listadoSensor']);
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
