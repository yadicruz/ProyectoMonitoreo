import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import "rxjs/add/operator/map";
import { SlimLoadingBarService } from 'node_modules/ng2-slim-loading-bar';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { SensorServiceService } from "../services/sensor-service.service";
import "rxjs/add/operator/map";

@Component({ templateUrl: 'home.component.html' ,
selector: 'app-home',
styleUrls:['/home.component.css']
  })
export class HomeComponent implements OnInit {
    loading = false;
    users: User[];
    filterargs;
    pcompra;
    listado;
    items;
    itemsel;
    constructor(private userService: UserService,private crudSensor:SensorServiceService, private slim:SlimLoadingBarService) { }
   
  
  
    ngOnInit() {
        this.loading = true;
     
        //this.slim.start();
       
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
      console.log("Vamos a eliminar!");
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





  
