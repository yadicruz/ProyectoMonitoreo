import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Dispositivo1ServiceService } from "../../services/dispositivo1-service.service";

@Component({
  selector: 'app-viento',
  templateUrl: './viento.component.html',
  styleUrls: ['/viento.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'VientoComponent'
  },
  inputs: ['diameter', 'mode', 'strokeWidth', 'value', 'percent'],

})
export class VientoComponent implements OnInit {
  @Input() color: ThemePalette;
  @Input() diameter: number;
  @Input() display: string | number;
  @Input() mode: ProgressSpinnerMode;
  @Input() strokeWidth: number;
  @Input() value: number;
  @Input() valuemin: number;
  @Input() valuemax: number;
 @Input() percent: number;
@Input() estadoTj : number;
 @Input() estadoHRj: number; 
 @Input() estadoTf: number;
 @Input() estadoHRf:number;
 @Input() estado: number;
 @Input () temperaturaJ : number;
 @Input () humedadrelativaJ;
 @Input () temperaturaF : number;
 @Input () humedadrelativaF : number;
 @Input () humedadsueloF : number;
 @Input () humedadsueloJ: number;
 @Input() estadoSF: number;
 @Input() estadoSJ: number;
  sensor1; sensor2; sensor3; sensor4;sensor5;
  valor = false;
  valor1 = true;
  dato1;
  dato2;

  opcion = 10;

 color1:string; 
  fontSize: number;

  constructor(
    private crudDispositivouno:Dispositivo1ServiceService
  ) { 
    
  }

  ngOnInit() {
    this.listarsensor1();
    this.listarsensor2();
    this.listarsensor3();
    this.formatSubtitle(76);
    this.loqueras(this.temperaturaJ);
    this.humedadRelaJStatus(this.humedadrelativaJ);
    this.temperaturaFStatus(this.temperaturaF);
    this.humedadRelaFStatus(this.humedadrelativaF);
 
  
  }
  
  
  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      console.log("Congratulations!")
      return "Congratulations!"
    }else if(percent >= 50){
      console.log("Congratulations!111111")
      
      return "Half1111111"
    }else if(percent > 0){
      console.log("Congratulations!2222222")
      
      return "Just began222222"
    }else {
      return "Not started"
    }
  }
  //Evaluacion detenida del jitomate
    loqueras(temperaturaJ){
      if( temperaturaJ >30 && temperaturaJ <= 35){
        this.estadoTj = 1;
        return "VENTILADOR ENCENDIDO"
      }else
      if(temperaturaJ < 15 && temperaturaJ>=12){
        this.estadoTj = 2;
        return "CALEFACCIÓN ENCENDIDO"
      } else
       if(temperaturaJ <=30 && temperaturaJ>=20){
        this.estadoTj = 3;
        return "ÓPTIMO"

      }else if(temperaturaJ >= 35 ){
        this.estadoTj = 4;
       // return this.estadoTj
      }else
      if(temperaturaJ <= 12){
        this.estadoTj = 5;
      //  return this.estadoTj
      }
    }
   
    //Evaluacion de la humedad relativa del jitomate
    humedadRelaJStatus(humedadrelativaJ){
      if( humedadrelativaJ > 75 && humedadrelativaJ <= 80){
        this.estadoHRj = 1;
        return "VENTILADOR ENCENDIDO"
      }else
      if(humedadrelativaJ < 65 && humedadrelativaJ >=60 ){
        this.estadoHRj = 2;
        return "CALEFACCIÓN ENCENDIDO"
      } else
       if(humedadrelativaJ <=75 && humedadrelativaJ>=65){
        this.estadoHRj = 3;
        return "ÓPTIMO"

      }else if(humedadrelativaJ == 70 ){
        this.estadoHRj = 4;
       // return this.estadoHRj
      }
    }

    //Evaluacion de la temperatura de las fresas

    temperaturaFStatus(temperaturaF){
      if( temperaturaF > 25){
        this.estadoTf = 1;
        return "VENTILADOR ENCENDIDO"
      }else
      if(temperaturaF < 12 ){
        this.estadoTf = 2;
        return "CALEFACCIÓN ENCENDIDO"
      } else
       if(temperaturaF >=15 && temperaturaF<=20){
        this.estadoTf = 3;
        return "ÓPTIMO"

      }else if(temperaturaF == 18 ){
        this.estadoTf = 4;
       // return this.estadoTf
      }
    }
    //Evaluacion de la humedad relativa de fresas
    humedadRelaFStatus(humedadrelativaF){
      if( humedadrelativaF > 70){
        this.estadoHRf =1;
        return "VENTILADOR ENCENDIDO"
      }else
      if(humedadrelativaF < 65 ){
        this.estadoHRf =2;
        return "CALEFACCIÓN ENCENDIDO"
      } else
       if(humedadrelativaF<=70 && humedadrelativaF>=65){
        this.estadoHRf =3;
        return "ÓPTIMO"

      }else if(humedadrelativaF == 68 ){
        this.estadoHRf =4;
       // return this.estadoHRf
      }
    }

    //Evaluacion de la humedad relativa de fresas
    humedadsueloFresas(humedadsueloF){
      if( humedadsueloF >= 90){
        this.estadoSF =1;
        return "SUSPENDER EL RIEGO"
      }else
      if(humedadsueloF <= 70 ){
        this.estadoSF =2;
        return "COMENZAR EL RIEGO"
      } else
       if(humedadsueloF<=89 && humedadsueloF>=70){
        this.estadoSF =3;
        return "ÓPTIMO"

      }
    }
    humedadsueloJitomates(humedadsueloJ){
      if( humedadsueloJ >= 60){
        this.estadoSJ =1;
        return "SUSPENDER EL RIEGO"
      }else
      if(humedadsueloJ <= 40 ){
        this.estadoSJ =2;
        return "COMENZAR EL RIEGO"
      } else
       if(humedadsueloJ<=50 && humedadsueloJ>=45){
        this.estadoSJ =3;
        return "ÓPTIMO"

      }
    }

  


    
  listarsensor1(){
    this.crudDispositivouno.listarultimosen1()
    .subscribe((data) => {
      this.sensor1 = data;
      console.log(this.sensor1);
      
    });
  }
   
  listarsensor2(){
    
    this.crudDispositivouno.listarultimosen2()
    
    .subscribe((data) => {
      this.sensor2 = data;
     
    });
  }
  listarsensor3(){
    
    this.crudDispositivouno.listarultimosen3()
    
    .subscribe((data) => {
      this.sensor3 = data;
    
    });
  }
    valorar(){
      if(this.value >50){
        console.log();

      }
    }

  

  
  





  apagar() {
    if (this.valor == false) {
      alert("ENCENDIDO...enviando peticion!!!");
         

    } else {
      alert("ENCENDIDO");
    }
  }

  encender() {
    if (this.valor1 == true) {
      alert("APAGADO..enviando peticion!!!");

    } else {
      alert("ENCENDIDO");
    }

  }

  



}