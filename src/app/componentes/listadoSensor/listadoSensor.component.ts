import { Component, OnInit } from '@angular/core';
import { SensorServiceService } from "../../services/sensor-service.service";
import "rxjs/add/operator/map";
import { SlimLoadingBarService } from 'node_modules/ng2-slim-loading-bar';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-listadoSensor',
  templateUrl: './listadoSensor.component.html',
  styleUrls: ['./listadoSensor.component.scss']
})
export class ListadoSensorComponent implements OnInit {
  filterargs;
  listado;
  items;
  itemsel;
  displayedColumns = ['Descripcion','Editar','Eliminar'];

  constructor(private crudSensor:SensorServiceService, private slim:SlimLoadingBarService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'agregar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/agregar.svg')
      );
      iconRegistry.addSvgIcon(
        'editar',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/editar.svg')
        );
        iconRegistry.addSvgIcon(
          'eliminar',
          sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/eliminar.svg')
          );
          iconRegistry.addSvgIcon(
            'eliminarCom',
            sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/eliminarCom.svg')
            );
            iconRegistry.addSvgIcon(
              'cancelar',
              sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/cancelar.svg')
              );
  }

  ngOnInit() {
    this.listarproductos();
    this.slim.start();
  }

  listarproductos(){
    this.slim.stop();
    this.crudSensor.listar()
    
    .subscribe((data) => {
      this.listado = data;
      this.slim.complete();
    });
  }

  confirmacion(item : any){
    console.log("Eliminar!");
    this.itemsel = item;
  }

  borrar(){
    console.log(this.itemsel);
    this.crudSensor.eliminar(this.itemsel.idsensor)
    
    .subscribe((data) => {
      this.listarproductos();
    });
  }

  
}


