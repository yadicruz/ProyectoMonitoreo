import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { SensorServiceService } from '../../services/sensor-service.service';
import "rxjs/add/operator/map";

import { SensorServiceService } from '../../services/sensor-service.service';
import "rxjs/add/operator/map";
@Component({
  selector: 'app-verhome',
  templateUrl: '../../home/home.component.html',
 
})
export class VerHomeComponent implements OnInit {
  item;
  
 

  constructor(private state:ActivatedRoute, private router:Router, private crud:SensorServiceService) {
    this.item = {}; //Hay que inicializar la variable en blanco
    this.item.valor;
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
          alert("Registro Guardado con Exito");
          //console.log("Registro Guardado con Exito");
          this.router.navigate(['listadoSensor']);
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
