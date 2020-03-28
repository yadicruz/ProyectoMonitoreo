import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SlimLoadingBarService } from 'node_modules/ng2-slim-loading-bar';
import { EstacionServiceService } from "../../services/estacion-service.service";
import { FileuploadService } from '../../services/fileupload.service';
import { Chart } from 'chart.js';  
import { HttpClient} from '@angular/common/http';  
import { Data } from '../../../app/Data';
import { GraficasExterior } from '@app/graficasExterior';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls:['./humedad.component.css']
  
})
export class HumedadComponent implements OnInit {
 
  listado;
  listadoTemperatura;
  listadoHumedad;
  listadoRocio;
  listadoTemperaturaC;
  listadoHumedadC;
  listadoRocioC;

  list;

  urlTemp = 'http://localhost/api/graficar/graficaExterior/temperatura.php';  
  urlIDT = 'http://localhost/api/graficar/graficaExterior/id.php'; 
  data: GraficasExterior[];  
  temperatura = []; 
  dataIdT = [];
  dataTemp = []; 

  urlIDH = 'http://localhost/api/graficar/graficaExterior/id.php'; 
  urlHum = 'http://localhost/api/graficar/graficaExterior/humedad.php'; 
  humedad = []; 
  dataIdH = [];
  dataHum = []; 

  urlIDV = 'http://localhost/api/graficar/graficaExterior/id.php'; 
  urlVien = 'http://localhost/api/graficar/graficaExterior/rocio.php'; 
  viento = []; 
  dataIdV = [];
  dataVien = [];
  
urlTE = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=9';
urlHE = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=10';

listaIDTE = []; listaIDHE = [];
listaIDFTE = []; listaIDFHE = [];
listaPromedioTE = []; listaPromedioHE= [];
listaFinalTE = []; listaFinalHE= [];
valorM:string[] = [];
    valorN:string[] = [];
    valorN1:string[] = [];
    valorN2:string[] = [];
    valorO:string[] = [];
    valorP:string[] = [];
    valorQ:string[] = [];
    valorR:string[] = [];
    valorS:string[] = [];
    valorT:string[] = [];
  constructor(
    private crud: EstacionServiceService,
    private slim: SlimLoadingBarService,
    private http: HttpClient,
    
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
   
  ) { iconRegistry.addSvgIcon(
    'detalles',
    sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/detalles.svg')
    );
    iconRegistry.addSvgIcon(
      'descargar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/descargar.svg')
      );
      iconRegistry.addSvgIcon(
        'ojo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/ojo.svg')
        );
        iconRegistry.addSvgIcon(
          'almacenar',
          sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/almacenar.svg')
          );
          iconRegistry.addSvgIcon(
            'grafica',
            sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/grafica.svg')
            ); }

  ngOnInit() {
    this.http.get(this.urlTE).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDFTE.push(
          y.fTE
         
        );   
      });
      this.valorQ = this.listaIDFTE; 
     
    });
    this.http.get(this.urlHE).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDFHE.push(
          y.fHE
         
        );   
      });
      this.valorR = this.listaIDFHE; 
     
    });
    this.http.get(this.urlTE).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDTE.push(
         
          y.idTE
         
        );   
      });
      this.valorM = this.listaIDTE; 
      
    });
    
    this.http.get(this.urlTE).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioTE.push(
          x.promedioTE
        ); 
      }); 
        this.valorN  = this.listaPromedioTE ;
    });

    this.http.get(this.urlTE).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalTE.push(
          x.finalTE
        ); 
      }); 
        this.valorN1  = this.listaFinalTE ;
    });

    this.http.get(this.urlHE).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDHE.push(
         
          y.idHE
          
        );   
      });
      this.valorO = this.listaIDHE; 
    });
    
    this.http.get(this.urlHE).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioHE.push(
          x.promedioHE
        ); 
      }); 
        this.valorP  = this.listaPromedioHE ;
    });
    this.http.get(this.urlHE).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalHE.push(
          x.finalHE
        ); 
      }); 
        this.valorN2  = this.listaFinalHE ;
    });
    this.listartodos();
    this.listarHumedadExterna();
    this.listarTemperaturaExterna();
    this.listarRocioExterna(); 

    this.listarTemperaturaExternaCompleto();
    this.listarHumedadExternaCompleto();
    this.listarRocioExternaCompleto();
    this.http.get(this.urlIDT).subscribe((result: GraficasExterior[]) => {  
      result.forEach(y => {  
        this.dataIdT.push(
          y.valorId
        ); 
          
        console.log(this.dataIdT);
      }); 
    });
    //id
    this.http.get(this.urlTemp).subscribe((result: GraficasExterior[]) => {  
      result.forEach(x => {  
        this.dataTemp.push(
          x.valorTemp
        ); 
          
        console.log(this.dataTemp);
      });  
     
      this.temperatura = new Chart('tempExterior', {  
        type: 'line', 
        labels: "nuevo", 
        data: {
          labels: this.dataIdT,
          datasets: [
            {
             label: "Temperatura",
              data: this.dataTemp,
              borderColor: 'white',
              backgroundColor: "	#006400", 
              options: {
               legend: {
                 display: false ,
                 labels: {
                   boxWidth: 90,
                   color: 'red'
                 }
               },
               scales: {  
                 xAxes: [{  
                  display: true,
                  title: "humedad (%)"
                   
                 }],  
                 yAxes: [{  
                   display:true,
                   title: "periodo" 
    
                 }],  
               } 
               
             }
               
            }  
          ]  
        }  
         
      }); 
    });
    ///////////////////////////////7
    this.http.get(this.urlIDH).subscribe((result: GraficasExterior[]) => {  
      result.forEach(y => {  
        this.dataIdH.push(
          y.valorId
        ); 
          
        console.log(this.dataIdH);
      }); 
    });
    //id
    this.http.get(this.urlHum).subscribe((result: GraficasExterior[]) => {  
      result.forEach(x => {  
        this.dataHum.push(
          x.valorHum
        ); 
          
        console.log(this.dataHum);
      });  
     
      this.humedad = new Chart('humExterior', {  
        type: 'line', 
        labels: "nuevo", 
        data: {
          labels: this.dataIdH,
          datasets: [
            {
             label: "Humedad relativa",
              data: this.dataHum,
              borderColor: 'white',
              backgroundColor: "	#006400", 
              options: {
               legend: {
                 display: false ,
                 labels: {
                   boxWidth: 90,
                   color: 'red'
                 }
               },
               scales: {  
                 xAxes: [{  
                  display: true,
                  title: "humedad (%)"
                   
                 }],  
                 yAxes: [{  
                   display:true,
                   title: "periodo" 
    
                 }],  
               } 
               
             }
               
            }  
          ]  
        }  
         
      }); 
    });
    /////////////////////////
    this.http.get(this.urlIDV).subscribe((result: GraficasExterior[]) => {  
      result.forEach(y => {  
        this.dataIdV.push(
          y.valorId
        ); 
          
        console.log(this.dataIdV);
      }); 
    });
    //id
    this.http.get(this.urlVien).subscribe((result: GraficasExterior[]) => {  
      result.forEach(x => {  
        this.dataVien.push(
          x.valorVien
        ); 
          
        console.log(this.dataVien);
      });  
     
      this.viento = new Chart('vienExterior', {  
        type: 'line', 
        labels: "nuevo", 
        data: {
          labels: this.dataIdV,
          datasets: [
            {
             label: "Precipitación",
              data: this.dataVien,
              borderColor: 'white',
              backgroundColor: "	#006400", 
              options: {
               legend: {
                 display: false ,
                 labels: {
                   boxWidth: 90,
                   color: 'red'
                 }
               },
               scales: {  
                 xAxes: [{  
                  display: true,
                  title: "humedad (%)"
                   
                 }],  
                 yAxes: [{  
                   display:true,
                   title: "periodo" 
    
                 }],  
               } 
               
             }
               
            }  
          ]  
        }  
         
      }); 
    });
    /////////////////////////
  }
  listartodos() {
    this.crud.listar()
      .subscribe((data) => {
        this.listado = data;
      });
  }
  listarTemperaturaExterna() {
    this.crud.listarTemperatura()
      .subscribe((data) => {
        this.listadoTemperatura = data;
      });
  }
  listarHumedadExterna() {
    this.crud.listarHumedad()
      .subscribe((data) => {
        this.listadoHumedad = data;
      });
  }
  listarRocioExterna() {
    this.crud.listarRocio()
      .subscribe((data) => {
        this.listadoRocio = data;
      });
  }

  listarTemperaturaExternaCompleto() {
    this.crud.listarTemperaturaCOM()
      .subscribe((data) => {
        this.listadoTemperaturaC = data;
      });
  }
  listarHumedadExternaCompleto() {
    this.crud.listarHumedadCOM()
      .subscribe((data) => {
        this.listadoHumedadC = data;
      });
  }
  listarRocioExternaCompleto() {
    this.crud.listarRocioCOM()
      .subscribe((data) => {
        this.listadoRocioC = data;
      });
  }
}