import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SensorServiceService } from '../../services/sensor-service.service';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-verSensor',
  templateUrl: '../../componentes/formularioSensor/formularioSensor.component.html',
 
})
export class VerSensorComponent implements OnInit {
  unidades = [{id:1, nombre:"INTERNO"}, {id:2, nombre:"EXTERNO"}];
  variables = [{id:1, nombre:"TEMPERATURA"},{id:2, nombre:"HUMEDAD"}];
  item;
  
  
  constructor(private state:ActivatedRoute, private router:Router, private crud:SensorServiceService) {
    this.item = {}; //Hay que inicializar la variable en blanco
    
    this.crud.detallar(this.state.snapshot.params.id)
   
    .subscribe((data) => {
      this.item = data[0]
    });
  }

  guardar(){
    let formData = new FormData();
    formData.append('idsel', this.state.snapshot.params.id);
    formData.append('nombresensor', this.item.nombresensor);
    formData.append('monitoreo_idmonitoreo', this.item.monitoreo_idmonitoreo);
    formData.append('variable_idvariable', this.item.variable_idvariable);

    this.crud.modificar(formData)

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
