import { Component, OnInit } from '@angular/core';
//import { ProductoServiceService } from "../../services/producto-service.service";
import "rxjs/add/operator/map";
import { SlimLoadingBarService } from 'node_modules/ng2-slim-loading-bar';
//import { Dispositivo1ServiceService } from "../../services/dispositivo1-service.service";
import { Dispositivo2ServiceService } from "../../services/dispositivo2-service.service";
import { Dispositivo3ServiceService } from "../../services/dispositivo3-service.service";
import { Dispositivo4ServiceService } from "../../services/dispositivo4-service.service";
import { Dispositivo5ServiceService } from "../../services/dispositivo5-service.service";

@Component({
  selector: 'app-listadoMonitoreo',
  templateUrl: './listadoMonitoreo.component.html',
  styleUrls: ['./listadoMonitoreo.component.css']
})
export class ListadoMonitoreoComponent implements OnInit {
  filterargs;
  pcompra;
  listado;
  listado2;
  listado3;
  listado4;
  listado5;
  items;
  itemsel;

  constructor(
    private crudDispositivodos:Dispositivo2ServiceService, 
    private crudDispositivotres:Dispositivo3ServiceService, 
    private crudDispositivocuatro:Dispositivo4ServiceService, 
    private crudDispositivocinco:Dispositivo5ServiceService, 
    private slim:SlimLoadingBarService) {}

  ngOnInit() {

    this.listardisp2();
    this.listardisp3();
    this.listardisp4();
    this.listardisp5();
    this.slim.start();
  }

 

  listardisp2(){
    this.slim.stop();
    this.crudDispositivodos.listar()
    
    .subscribe((data) => {
      this.listado2 = data;
      this.slim.complete();
    });
  }

  listardisp3(){
    this.slim.stop();
    this.crudDispositivotres.listar()
    .subscribe((data) => {
      this.listado3 = data;
      this.slim.complete();
    });
  }
  listardisp4(){
    this.slim.stop();
    this.crudDispositivocuatro.listar()
    
    .subscribe((data) => {
      this.listado4 = data;
      this.slim.complete();
    });
  }
  listardisp5(){
    this.slim.stop();
    this.crudDispositivocinco.listar()
    
    .subscribe((data) => {
      this.listado5 = data;
      this.slim.complete();
    });
  }

  confirmacion(item : any){
    console.log("Vamo a elimina!");
    this.itemsel = item;
  }

  /**
   * borrar(){
    console.log(this.itemsel);
    this.crudProducto.eliminar(this.itemsel.id)
    
    .subscribe((data) => {
      this.listarproductos();
    });
  }
   */
  
}
