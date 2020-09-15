import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
//import { ProductoServiceService } from "../../services/producto-service.service";
import "rxjs/add/operator/map";
import { SlimLoadingBarService } from 'node_modules/ng2-slim-loading-bar';
import { Dispositivo1ServiceService } from "../../services/dispositivo1-service.service";
import { Dispositivo2ServiceService } from "../../services/dispositivo2-service.service";
import { Dispositivo3ServiceService } from "../../services/dispositivo3-service.service";
import { Dispositivo4ServiceService } from "../../services/dispositivo4-service.service";
import { Dispositivo5ServiceService } from "../../services/dispositivo5-service.service";
import { SensorServiceService } from "../../services/sensor-service.service";
import { Chart } from 'chart.js';  
import { HttpClient} from '@angular/common/http';  
import { Data } from '../../../app/Data';
import { PromediosService } from '@app/services/promedios.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-monitoreoInEx',
  templateUrl: './monitoreoInEx.component.html',
  styleUrls: ['./monitoreoInEx.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MonitoreoInExComponent implements OnInit {
 
  @ViewChild('myCanvas', {static:true}) private chartRef;
  @ViewChild('humedadFresas', {static:true}) private chartFresas;
  @ViewChild('humedadSFresas', {static:true}) private chartFresasSuelo;

  filterargs;
  pcompra;
  sensor1; sensor2; sensor3; sensor4;sensor5;
  senso1; senso2; senso3; senso4; senso5;
  sens1; sens2; sens3; sens4; sens5;
  sen1; sen2; sen3; sen4; sen5;
  se1; se2; se3; se4; se5;
  listado1; listado2; listado3; listado4; listado5;
  todossensor1; todossensor2; todossensor3; todossensor4; todossensor5;
  todossenso1; todossenso2; todossenso3; todossenso4; todossenso5;
  todossens1; todossens2; todossens3; todossens4; todossens5;
  todossen1; todossen2; todossen3; todossen4; todossen5;
  todosse1; todosse2; todosse3; todosse4; todosse5;
 listadoSuelo;
 listadoSueloF;
  items;
  itemsel;

urlTJ = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=2';
urlTF = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=5';
urlHJ = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=3';
urlHF = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=6';
urlHSJ = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=7';
urlHSF = 'http://localhost/api/promedioHora/promedioTemperatura.php?opcion=8';


listaIDTJ =[];  listaIDHJ = []; listaIDSJ = []; 
listaIDTF =[]; listaIDHF = []; listaIDSF = [];
listaPromedioTJ = []; listaPromedioTF = []; 
  listaPromedioHJ = []; listaPromedioHF = [];
  listaPromedioHSJ = []; listaPromedioHSF = [];
  listaFinalTJ = []; listaFinalTF = []; 
  listaFinalHJ = []; listaFinalHF = [];
  listaFinalHSJ = []; listaFinalHSF = [];
listaFfreHS = [];
 
  //Sensor de jitomates humedad
  url = 'http://localhost/api/graficar/graficaInterior/prueba1.php';  
  url2 = 'http://localhost/api/graficar/graficaInterior/prueba2.php'; 
  data: Data[];  
  Linechart = []; 
  //Sensor de jitomate temperatura
  Linechart1 = []; 
   data1 = [];
   data2 = []; 
   url3 = 'http://localhost/api/graficar/graficaInterior/prueba3.php';  
   url4 = 'http://localhost/api/graficar/graficaInterior/prueba4.php'; 
   
    data3 = [];
    data4 = []; 
//Sensor del suelo para jitomates.
    url5 = 'http://localhost/api/graficar/graficaInterior/prueba5.php';  
    url6 = 'http://localhost/api/graficar/graficaInterior/prueba6.php'; 
     
    Linechart2 = []; 
     data5 = [];
     data6 = []; 

     //SENSOR DE FRESAS PARA LA TEMPERATURA
     urlFID = 'http://localhost/api/graficar/graficaInterior/prueba7.php';  
     urlFTE = 'http://localhost/api/graficar/graficaInterior/prueba8.php'; 
     urlFHU = 'http://localhost/api/graficar/graficaInterior/prueba9.php'; 
     urlFIDHS = 'http://localhost/api/graficar/graficaInterior/prueba11.php'; 
     urlFHS = 'http://localhost/api/graficar/graficaInterior/prueba12.php';
     
     GraficaTempFre =[]; 
      dataIdFre = [];
      dataTempFre = [];
      
      GraficaHumFre =[]; 
      dataHumFre = []; 
      dataIdHFre = [];

      GraficaHusFre =[]; 
      dataHusFre = []; 
      dataIdHsFre = [];
      
      valorA:string[] = [];
      valorB:string[] = [];
      valorC:string[] = [];
      valorD:string[] = [];
      valorE:string[] = [];
      valorF:string[] = [];

      valorG:string[] = [];
      valorH:string[] = [];
      valorI:string[] = [];
      valorJ:string[] = [];
      valorK:string[] = [];
      valorL:string[] = [];

      valorMM:string[] = [];
      valorB1:string[] = [];
      valorB2:string[] = [];
      valorB3:string[] = [];
      valorB4:string[] = [];
      valorB5:string[] = [];
      valorB6:string[] = [];
      maximoT = [30,30,30,30,30,30,30,30,30];
   minimoT = [15,15,15,15,15,15,15,15,15];
   maximoR = [75,75,75,75,75,75,75,75,75];
   minimoR = [60,60,60,60,60,60,60,60,60];
   maximoS = [60,60,60,60,60,60,60,60,60];
   minimoS = [40,40,40,40,40,40,40,40,40];

   maximoTF = [25,25,25,25,25,25,25,25,25];
   minimoTF = [12,12,12,12,12,12,12,12,12];
   maximoRF = [70,70,70,70,70,70,70,70,70];
   minimoRF = [65,65,65,65,65,65,65,65,65];
   maximoSF = [90,90,90,90,90,90,90,90,90];
   minimoSF = [70,70,70,70,70,70,70,70,70];
  constructor(
    private crudDispositivouno:Dispositivo1ServiceService, 
    private crudDispositivodos:Dispositivo2ServiceService, 
    private crudDispositivotres:Dispositivo3ServiceService, 
    private crudDispositivocuatro:Dispositivo4ServiceService, 
    private crudDispositivocinco:Dispositivo5ServiceService,
    private slim:SlimLoadingBarService,
    private http: HttpClient,
    
    private promediarRegistros: PromediosService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    ) {
      iconRegistry.addSvgIcon(
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
              'buscar',
              sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/buscar.svg')
              );
              iconRegistry.addSvgIcon(
                'grafica',
                sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/grafica.svg')
                );

     }
    
  ngOnInit() {

    this.http.get(this.urlTJ).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDTJ.push(
          y.idTJ
        );   
      });
      this.valorA = this.listaIDTJ; 
    });
    
    this.http.get(this.urlTJ).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioTJ.push(
          x.promedioTJ
        ); 
      }); 
        this.valorB  = this.listaPromedioTJ ;
    });
    ////final
    this.http.get(this.urlTJ).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalTJ.push(
          x.finalTJ
        ); 
      }); 
        this.valorB1  = this.listaFinalTJ ;
    });
    //humedad relativa
    this.http.get(this.urlHJ).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDHJ.push(
          y.idHJ
        );   
      });
      this.valorC = this.listaIDHJ; 
    });
    
    this.http.get(this.urlHJ).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioHJ.push(
          x.promedioHJ
        ); 
      }); 
        this.valorD  = this.listaPromedioHJ ;
    });
    
    ////final
    this.http.get(this.urlHJ).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalHJ.push(
          x.finalHJ
        ); 
      }); 
        this.valorB2  = this.listaFinalHJ ;
    });
    /////////////////////////

    this.http.get(this.urlHSJ).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDSJ.push(
          y.idTSJ
        );   
      });
      this.valorE = this.listaIDSJ; 
    });
    
    this.http.get(this.urlHSJ).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioHSJ.push(
          x.promedioTSJ
        ); 
      }); 
        this.valorF  = this.listaPromedioHSJ ;
    });
    this.http.get(this.urlHSJ).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalHSJ.push(
          x.finalTSJ
        ); 
      }); 
        this.valorB3  = this.listaFinalHSJ ;
    });

    ////FRESAS
    this.http.get(this.urlTF).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDTF.push(
          y.idTF
        );   
      });
      this.valorG = this.listaIDTF; 
    });
    
    this.http.get(this.urlTF).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioTF.push(
          x.promedioTF
        ); 
      }); 
        this.valorH  = this.listaPromedioTF ;
    });

    this.http.get(this.urlTF).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalTF.push(
          x.finalTF
        ); 
      }); 
        this.valorB4  = this.listaFinalTF ;
    });

    this.http.get(this.urlHF).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDHF.push(
          y.idHF
        );   
      });
      this.valorI = this.listaIDHF; 
    });
    
    this.http.get(this.urlHF).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioHF.push(
          x.promedioHF
        ); 
      }); 
        this.valorJ  = this.listaPromedioHF ;
    });

    this.http.get(this.urlHF).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalHF.push(
          x.finalHF
        ); 
      }); 
        this.valorB5  = this.listaFinalHF ;
    });

    this.http.get(this.urlHSF).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaIDSF.push(
          y.idTSF
        );   
      });
      this.valorK = this.listaIDSF; 
    });
    
    ///calcular la fecha de la humedad de suelo para los siguietnes
    this.http.get(this.urlHSF).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.listaFfreHS .push(
          y.FHSF
          
        );   
      });
      this.valorMM = this.listaFfreHS ; 
     
    });
    //calcular hora
    this.http.get(this.urlHSF).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaPromedioHSF.push(
          x.promedioTSF
        ); 
      }); 
        this.valorL  = this.listaPromedioHSF ;
    });

    this.http.get(this.urlHSF).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.listaFinalHSF.push(
          x.finalTSF
        ); 
      }); 
        this.valorB6  = this.listaFinalHSF ;
    });

   
  this.listarCompletoSuelo();
    this.listarCompletoUno();
    this.listarsensor1();
    this.listartodossensor1();
    this.listarsensor2();
    this.listartodossensor2();
    this.listarsensor3();
    this.listartodossensor3();
    this.listarsensor4();
    this.listartodossensor4();
    this.listarsensor5();
    this.listartodossensor5();

    this.listarCompletoDos();
    this.listarsenso1();
    this.listartodossenso1();
    this.listarsenso2();
    this.listartodossenso2();
    this.listarsenso3();
    this.listartodossenso3();

    this.listarCompletoTres();
    this.listarsens1();
    this.listartodossens1();
    this.listarsens2();
    this.listartodossens2();
    this.listarsens3();
    this.listartodossens3();

    this.listarCompletoCuatro();
    this.listarsen1();
    this.listartodossen1();
    this.listarsen2();
    this.listartodossen2();
    this.listarsen3();
    this.listartodossen3();

    this.listarCompletocinco();
    this.listarse1();
    this.listartodosse1();
    this.listarse2();
    this.listartodosse2();
    this.listarse3();
    this.listartodosse3();
    this.slim.start();
    
    this.http.get(this.url2).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.data2.push(
          y.valory1
        ); 
          
       // console.log(this.data2);
      }); 
    });
    //id
    this.http.get(this.url).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.data1.push(
          x.valorx1
        ); 
          
        console.log(this.data1);
      });  
      this.Linechart = new Chart('canvas', {  
        type: 'line', 
       
        data: {  
          label: "Humedad", 
          color:"#00ff00",
          labels: this.data1,
            
          datasets: [  
            {  
              label: "Humedad Relativa",
              color:"#00ff00",
              data: this.data2,
              
              
              borderColor: 'white',  
              backgroundColor: "#000FFF",  
              legend: {  
                display: false ,
                labels: {
                  boxWidth: 90,
                  color: 'red'
                } 
              }
            } ,
            ///////////////777
            {  
              label: "Máximo",
              
               data: this.maximoRF,
               
               
               borderColor: 'red',  
              // backgroundColor: "#000FFF", 
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
                   display: false
                    
                  }],  
                  yAxes: [{  
                    display:false 
     
                  }],  
                } 
                
              }
                
             } ,
             {  
              label: "Mínimo",
              display:false,
               data: this.minimoRF,
               
               
               borderColor: 'yellow',  
              // backgroundColor: "#000FFF", 
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
                   display: true
                    
                  }],  
                  yAxes: [{  
                    display:true 
     
                  }],  
                } 
                
              }
                
             } 
            /////////////// 
          ]  
        } 
      }); 
  }); 
  
  this.http.get(this.url3).subscribe((result: Data[]) => {  
    result.forEach(y => {  
      this.data3.push(
        y.valorIdTem
      ); 
        
     // console.log(this.data3);
    }); 
  });
  //id
  this.http.get(this.url4).subscribe((result: Data[]) => {  
    result.forEach(x => {  
      this.data4.push(
        x.valorTem
      ); 
        
     // console.log(this.data4);
    });  
    this.Linechart1 = new Chart('canvas1', {  
      type: 'line', 
      
      data: {  
        labels: this.data3,
          
        datasets: [  
          {  
            label: "Temperatura",
            data: this.data4,
            
            borderColor: 'white',  
            backgroundColor: "#000FFF", 
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
                 display: true
                  
                }],  
                yAxes: [{  
                  display:true 

                }],  
              } 
              
            }   
          } , 
          //////
          {  
            label: "Máximo",
            
             data: this.maximoT,
             
             
             borderColor: 'red',  
            // backgroundColor: "#000FFF", 
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
                 display: false
                  
                }],  
                yAxes: [{  
                  display:false 
   
                }],  
              } 
              
            }
              
           } ,
           {  
            label: "Mínimo",
            display:false,
             data: this.minimoT,
             
             
             borderColor: 'yellow',  
            // backgroundColor: "#000FFF", 
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
                 display: true
                  
                }],  
                yAxes: [{  
                  display:true 
   
                }],  
              } 
              
            }
              
           } 
        
          //////
        ]  
      }  
      
    }); 
}); 

this.http.get(this.url5).subscribe((result: Data[]) => {  
  result.forEach(y => {  
    this.data5.push(
      y.valorIdSu
    ); 
      
   // console.log(this.data5);
  }); 
});
//id
this.http.get(this.url6).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.data6.push(
      x.valorSu
    ); 
      
   // console.log(this.data6);
  });  
  this.Linechart2 = new Chart('canvas2', {  
    type: 'line', 
    labels: "sss", 
    data: {  
     
      labels: this.data5,
        
      datasets: [  
        {  
         label: "Humedad del suelo",
          data: this.data6,
          
          
          borderColor: 'white',  
          backgroundColor: "#000FFF", 
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
              display: true
               
             }],  
             yAxes: [{  
               display:true 

             }],  
           } 
           
         }
           
        },
        /////
        {  
          label: "Máximo",
          
           data: this.maximoS,
           
           
           borderColor: 'red',  
          // backgroundColor: "#000FFF", 
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
               display: false
                
              }],  
              yAxes: [{  
                display:false 
 
              }],  
            } 
            
          }
            
         } ,
         {  
          label: "Mínimo",
          display:false,
           data: this.minimoS,
           
           
           borderColor: 'yellow',  
          // backgroundColor: "#000FFF", 
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
               display: true
                
              }],  
              yAxes: [{  
                display:true 
 
              }],  
            } 
            
          }
            
         }
        /////  
      ]  
    }  
     
  }); 
}); 

/////EVALUACION DE LA GRAFICA TEMPERATURA/////////77777
//this.context = (<HTMLCanvasElement>this.prueba.nativeElement).getContext('2d');
//let htmlRef = this.elementRef.nativeElement.querySelector(`#prueba`);
this.http.get(this.urlFID).subscribe((result: Data[]) => {  
  result.forEach(y => {  
    this.dataIdFre.push(
      y.valorIdFresas
    ); 
      
    //console.log(this.dataIdFre);
  }); 
});
//id
this.http.get(this.urlFTE).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataTempFre.push(
      x.valorTempFresas
    ); 
      
    //console.log(this.dataTempFre);
  });  
 
  this.GraficaTempFre = new Chart(this.chartRef.nativeElement, {  
    type: 'line', 
    labels: "nuevo", 
    data: {  
     
      labels: this.dataIdFre,
        
      datasets: [  
        {  
         label: "Temperatura Fresas",
          data: this.dataTempFre,
          borderColor: 'white',  
          backgroundColor: "#006400", 
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
              display: true
               
             }],  
             yAxes: [{  
               display:true 

             }],  
           } 
           
         }
           
        } ,
        //
        {  
          label: "Máximo",
          
           data: this.maximoTF,
           borderColor: 'red',  
          // backgroundColor: "#000FFF", 
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
               display: false
                
              }],  
              yAxes: [{  
                display:false 
 
              }],  
            } 
            
          }
            
         } ,
         {  
          label: "Mínimo",
          display:false,
           data: this.minimoTF,
           
           
           borderColor: 'yellow',  
          // backgroundColor: "#000FFF", 
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
               display: true
                
              }],  
              yAxes: [{  
                display:true 
 
              }],  
            } 
            
          }
            
         }
        // 
      ]  
    }  
     
  }); 
});
/////EVALUACION DE LA GRAFICA TEMPERATURA/////////77777
//this.context = (<HTMLCanvasElement>this.prueba.nativeElement).getContext('2d');
//let htmlRef = this.elementRef.nativeElement.querySelector(`#prueba`);
this.http.get(this.urlFID).subscribe((result: Data[]) => {  
  result.forEach(y => {  
    this.dataIdHFre.push(
      y.valorIdFresas
    ); 
      
    //console.log(this.dataIdHFre);
  }); 
});
//id
this.http.get(this.urlFHU).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataHumFre.push(
      x.valorHumFresas
    ); 
      
    //console.log(this.dataHumFre);
  });  
 
  this.GraficaHumFre = new Chart(this.chartFresas.nativeElement, {  
    type: 'line', 
    labels: "nuevo", 
    data: {
      labels: this.dataIdFre,
      datasets: [
        {
         label: "Humedad Fresas",
          data: this.dataHumFre,
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
           
        } ,
        ////
        {  
          label: "Máximo",
          
           data: this.maximoRF,
           
           
           borderColor: 'red',  
          // backgroundColor: "#000FFF", 
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
               display: false
                
              }],  
              yAxes: [{  
                display:false 
 
              }],  
            } 
            
          }
            
         } ,
         {  
          label: "Mínimo",
          display:false,
           data: this.minimoRF,
           
           
           borderColor: 'yellow',  
          // backgroundColor: "#000FFF", 
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
               display: true
                
              }],  
              yAxes: [{  
                display:true 
 
              }],  
            } 
            
          }
            
         } 
      
        //// 
      ]  
    }  
     
  }); 
});

//SUELO FRESAS
///////////////////////////////7
this.http.get(this.urlFIDHS).subscribe((result: Data[]) => {  
  result.forEach(y => {  
    this.dataIdHsFre.push(
      y.valorIdSuFresas
    ); 
      
   
  }); 
});
//id
this.http.get(this.urlFHS).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataHusFre.push(
      x.valorHSuFresas
    ); 
      
    //console.log(this.dataHumFre);
  });  
 
  this.GraficaHusFre = new Chart(this.chartFresasSuelo.nativeElement, {  
    type: 'line', 
    labels: "nuevo", 
    data: {
      labels: this.dataIdHsFre,
      datasets: [
        {
         label: "Humedad de suelo",
          data: this.dataHusFre,
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
           
        } ,
        //
        {  
          label: "Máximo",
          
           data: this.maximoSF,
           
           
           borderColor: 'red',  
          // backgroundColor: "#000FFF", 
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
               display: false
                
              }],  
              yAxes: [{  
                display:false 
 
              }],  
            } 
            
          }
            
         } ,
         {  
          label: "Mínimo",
          display:false,
           data: this.minimoSF,
           
           
           borderColor: 'yellow',  
          // backgroundColor: "#000FFF", 
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
               display: true
                
              }],  
              yAxes: [{  
                display:true 
 
              }],  
            } 
            
          }
            
         }
        //

      ]  
    }  
     
  }); 
});
///////////////////////////////7

}

////////////////////7777

/////////////////////7777

listarCompletoSuelo(){
  this.crudDispositivouno.listarSuelo()
  .subscribe((data) => {
    this.listadoSuelo = data;
    this.slim.complete();
  });
}
  


  confirmacion(item : any){
    console.log("Eliminar!");
    this.itemsel = item;
  }

  listarCompletoUno(){
    this.slim.stop();
    this.crudDispositivouno.listar()
    
    .subscribe((data) => {
      this.listado1 = data;
      this.slim.complete();
    });
  }
  
  listarsensor1(){
    this.slim.stop();
    this.crudDispositivouno.listarultimosen1()
    
    .subscribe((data) => {
      this.sensor1 = data;
     
    });
  }
  listartodossensor1(){
    this.slim.stop();
    this.crudDispositivouno.listartodossen1()
    
    .subscribe((data) => {
      this.todossensor1 = data;
      this.slim.complete();
    });
  }
  listarsensor2(){
    this.slim.stop();
    this.crudDispositivouno.listarultimosen2()
    
    .subscribe((data) => {
      this.sensor2 = data;
      this.slim.complete();
    });
  }
  listartodossensor2(){
    this.slim.stop();
    this.crudDispositivouno.listartodossen2()
    
    .subscribe((data) => {
      this.todossensor2 = data;
      this.slim.complete();
    });
  }
  listarsensor3(){
    this.slim.stop();
    this.crudDispositivouno.listarultimosen3()
    
    .subscribe((data) => {
      this.sensor3 = data;
      this.slim.complete();
    });
  }
  listartodossensor3(){
    this.slim.stop();
    this.crudDispositivouno.listartodossen3()
    
    .subscribe((data) => {
      this.todossensor3 = data;
      this.slim.complete();
    });
  }
  listarsensor4(){
    this.slim.stop();
    this.crudDispositivouno.listarultimosen4()
    
    .subscribe((data) => {
      this.sensor4 = data;
      this.slim.complete();
    });
  }
  listartodossensor4(){
    this.slim.stop();
    this.crudDispositivouno.listartodossen4()
    
    .subscribe((data) => {
      this.todossensor4 = data;
      this.slim.complete();
    });
  }
  listarsensor5(){
    this.slim.stop();
    this.crudDispositivouno.listarultimosen5()
    
    .subscribe((data) => {
      this.sensor5 = data;
      this.slim.complete();
    });
  }
  listartodossensor5(){
    this.slim.stop();
    this.crudDispositivouno.listartodossen5()
    
    .subscribe((data) => {
      this.todossensor5 = data;
      this.slim.complete();
    });
  }

  listarCompletoDos(){
    this.slim.stop();
    this.crudDispositivodos.listar()
    
    .subscribe((data) => {
      this.listado2 = data;
      this.slim.complete();
    });
  }
  listarsenso1(){
    this.slim.stop();
    this.crudDispositivodos.listarultimosen1()
    
    .subscribe((data) => {
      this.senso1 = data;
      this.slim.complete();
    });
  }
  listartodossenso1(){
    this.slim.stop();
    this.crudDispositivodos.listartodossen1()
    
    .subscribe((data) => {
      this.todossenso1 = data;
      this.slim.complete();
    });
  }
  listarsenso2(){
    this.slim.stop();
    this.crudDispositivodos.listarultimosen2()
    
    .subscribe((data) => {
      this.senso2 = data;
      this.slim.complete();
    });
  }
  listartodossenso2(){
    this.slim.stop();
    this.crudDispositivodos.listartodossen2()
    
    .subscribe((data) => {
      this.todossenso2 = data;
      this.slim.complete();
    });
  }
  listarsenso3(){
    this.slim.stop();
    this.crudDispositivodos.listarultimosen3()
    
    .subscribe((data) => {
      this.senso3 = data;
      this.slim.complete();
    });
  }
  listartodossenso3(){
    this.slim.stop();
    this.crudDispositivodos.listartodossen3()
    
    .subscribe((data) => {
      this.todossenso3 = data;
      this.slim.complete();
    });
  }
  
  listarCompletoTres(){
    this.slim.stop();
    this.crudDispositivotres.listar()
    
    .subscribe((data) => {
      this.listado3 = data;
      this.slim.complete();
    });
  }
  listarsens1(){
    this.slim.stop();
    this.crudDispositivotres.listarultimosen1()
    
    .subscribe((data) => {
      this.sens1 = data;
      this.slim.complete();
    });
  }
  listartodossens1(){
    this.slim.stop();
    this.crudDispositivotres.listartodossen1()
    
    .subscribe((data) => {
      this.todossens1 = data;
      this.slim.complete();
    });
  }
  listarsens2(){
    this.slim.stop();
    this.crudDispositivotres.listarultimosen2()
    
    .subscribe((data) => {
      this.sens2 = data;
      this.slim.complete();
    });
  }
  listartodossens2(){
    this.slim.stop();
    this.crudDispositivotres.listartodossen2()
    
    .subscribe((data) => {
      this.todossens2 = data;
      this.slim.complete();
    });
  }
  listarsens3(){
    this.slim.stop();
    this.crudDispositivotres.listarultimosen3()
    
    .subscribe((data) => {
      this.sens3 = data;
      this.slim.complete();
    });
  }
  listartodossens3(){
    this.slim.stop();
    this.crudDispositivotres.listartodossen3()
    
    .subscribe((data) => {
      this.todossens3 = data;
      this.slim.complete();
    });
  }

  listarCompletoCuatro(){
    this.slim.stop();
    this.crudDispositivocuatro.listar()
    
    .subscribe((data) => {
      this.listado4 = data;
      this.slim.complete();
    });
  }
  listarsen1(){
    this.slim.stop();
    this.crudDispositivocuatro.listarultimosen1()
    
    .subscribe((data) => {
      this.sen1 = data;
      this.slim.complete();
    });
  }
  listartodossen1(){
    this.slim.stop();
    this.crudDispositivocuatro.listartodossen1()
    
    .subscribe((data) => {
      this.todossen1 = data;
      this.slim.complete();
    });
  }
  listarsen2(){
    this.slim.stop();
    this.crudDispositivocuatro.listarultimosen2()
    
    .subscribe((data) => {
      this.sen2 = data;
      this.slim.complete();
    });
  }
  listartodossen2(){
    this.slim.stop();
    this.crudDispositivocuatro.listartodossen2()
    
    .subscribe((data) => {
      this.todossen2 = data;
      this.slim.complete();
    });
  }
  listarsen3(){
    this.slim.stop();
    this.crudDispositivocuatro.listarultimosen3()
    
    .subscribe((data) => {
      this.sen3 = data;
      this.slim.complete();
    });
  }
  listartodossen3(){
    this.slim.stop();
    this.crudDispositivocuatro.listartodossen3()
    
    .subscribe((data) => {
      this.todossen3 = data;
      this.slim.complete();
    });
  }

  listarCompletocinco(){
    this.slim.stop();
    this.crudDispositivocinco.listar()
    
    .subscribe((data) => {
      this.listado5 = data;
      this.slim.complete();
    });
  }
  listarse1(){
    this.slim.stop();
    this.crudDispositivocinco.listarultimosen1()
    
    .subscribe((data) => {
      this.se1 = data;
      this.slim.complete();
    });
  }
  listartodosse1(){
    this.slim.stop();
    this.crudDispositivocinco.listartodossen1()
    
    .subscribe((data) => {
      this.todosse1 = data;
      this.slim.complete();
    });
  }
  listarse2(){
    this.slim.stop();
    this.crudDispositivocinco.listarultimosen2()
    
    .subscribe((data) => {
      this.se2 = data;
      this.slim.complete();
    });
  }
  listartodosse2(){
    this.slim.stop();
    this.crudDispositivocinco.listartodossen2()
    
    .subscribe((data) => {
      this.todosse2 = data;
      this.slim.complete();
    });
  }
  listarse3(){
    this.slim.stop();
    this.crudDispositivocinco.listarultimosen3()
    
    .subscribe((data) => {
      this.se3 = data;
      this.slim.complete();
    });
  }
  listartodosse3(){
    this.slim.stop();
    this.crudDispositivocinco.listartodossen3()
    
    .subscribe((data) => {
      this.todosse3 = data;
      this.slim.complete();
    });
  }


  
 

}