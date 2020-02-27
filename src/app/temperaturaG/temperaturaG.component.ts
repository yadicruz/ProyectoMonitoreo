import { Component, OnInit, ɵɵviewQuery } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../../app/Data';
import { Chart } from 'chart.js';
import {Router} from '@angular/router';
import { Dispositivo1ServiceService } from "../services/dispositivo1-service.service";
import { GraficasExterior } from '@app/graficasExterior';
@Component({
  selector: 'app-temperaturaG',
  templateUrl: './temperaturaG.component.html',
  styleUrls: ['./temperaturaG.component.css']
})
export class TemperaturaGComponent implements OnInit {
 
  data: Data[];
 
  //HUMEDAD RELATIVA 
  //INTERIOR FRESAS
  urlFHU = 'http://localhost/api/graficar/graficaInterior/prueba9.php'; 
  dataHumFre = [];
  //INTERIOR JITOMATES
  url2 = 'http://localhost/api/graficar/graficaInterior/prueba2.php'; 
  data2 = []; 
  //EXTERIOR
  urlHum = 'http://localhost/api/graficar/graficaExterior/humedad.php'; 
  dataHum = []; 
  //hUMEDAD DEL SUELO JITOMATES
  url6 = 'http://localhost/api/graficar/graficaInterior/prueba6.php'; 
  data6 = []; 
  //HUMEDAD DEL SUELO FRESAS
  urlFHS = 'http://localhost/api/graficar/graficaInterior/prueba12.php';
     
  //Temperaturas
  //tem jitomate
  url4 = 'http://localhost/api/graficar/graficaInterior/prueba4.php'; 
  data4 = []; 
  //tem fressas
  urlFTE = 'http://localhost/api/graficar/graficaInterior/prueba8.php'; 
  dataTempFre = [];
  //tem exterior
  urlTemp = 'http://localhost/api/graficar/graficaExterior/temperatura.php';  
  data1: GraficasExterior[];  
  
  url = 'http://localhost/api/graficar/graficaInterior/prueba1.php';  
  dataidjito = [];
  dataTemp = []; 

   
  dataHusFre = []; 

  
  urlFID = 'http://localhost/api/graficar/graficaInterior/prueba77.php';  
  
  urlNUEVO= 'http://localhost/api/graficar/graficaInterior/prueba6.php'; 
   
  GraficaTempFre = []; 
  GraficaHum = [];
   dataIdFre = [];
  
   datanuevo = [];
  constructor(private http: HttpClient, private router: Router,
    private crudDispositivouno:Dispositivo1ServiceService, 
    ) {
    
  }
  ngOnInit() {
    /////////////////////////primer grafica uniendo datos
    this.http.get(this.urlTemp).subscribe((result: GraficasExterior[]) => {  
      result.forEach(x => {  
        this.dataTemp.push(
          x.valorTemp
        ); 
          
        console.log(this.dataTemp);
      });
    });
    this.http.get(this.url4).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.data4.push(
          x.valorTem
        ); 
          
       // console.log(this.data4);
      });  
    });
    
    //////////////7//

    this.http.get(this.urlFID).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.dataIdFre.push(
          y.valorIdFresas
        ); 
          
        console.log(this.dataIdFre);
      }); 
    });
    //id
    this.http.get(this.urlFTE).subscribe((result: Data[]) => {  
      result.forEach(x => {  
        this.dataTempFre.push(
          x.valorTempFresas
        ); 
          
        console.log(this.dataTempFre);
      });  
      this.GraficaTempFre = new Chart('gFresasTemp', {  
        type: 'line', 
        data: {  
         
          labels: 
          this.dataIdFre ,
          
            
          datasets: [ 
            {  
              label: "Exterior",
               data: this.dataTemp,
               borderColor: 'green',  
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
                
             } ,
             //////////////777
             
            {  
             label: "Jitomates",
              data: this.data4,
              
              
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
                  display: true
                   
                 }],  
                 yAxes: [{  
                   display:true 
    
                 }],  
               } 
               
             }
               
            } ,
            //////////////777
            {  
              label: "Fresas",
               data: this.dataTempFre,
               
               
               borderColor: 'blue',  
               //backgroundColor: "#000FFF", 
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
            ///////////////////777 
          ]  
        }  
         
      }); 
    });



/////////////primer grafica termina
this.http.get(this.urlHum).subscribe((result: GraficasExterior[]) => {  
  result.forEach(x => {  
    this.dataHum.push(
      x.valorHum
    ); 
      
  });  
}); 
//humedad suelo itomates 
this.http.get(this.url6).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.data6.push(
      x.valorSu
    ); 
      
   // console.log(this.data6);
  }); 
}); 
//humedad suelo fresas
this.http.get(this.urlFHS).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataHusFre.push(
      x.valorHSuFresas
    ); 
      
    //console.log(this.dataHumFre);
  }); 
}); 
//humedad jitomates
this.http.get(this.url2).subscribe((result: Data[]) => {  
  result.forEach(y => {  
    this.data2.push(
      y.valory1
    ); 
      
   // console.log(this.data2);
  }); 
});
//humedad fresas
this.http.get(this.urlFHU).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataHumFre.push(
      x.valorHumFresas
    ); 
      
    //console.log(this.dataHumFre);
  });
});

//////////////7//
 
this.http.get(this.url).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataidjito.push(
      x.valorx1
    ); 
      
  
  }); 
});
//id
this.http.get(this.urlFTE).subscribe((result: Data[]) => {  
  result.forEach(x => {  
    this.dataTempFre.push(
      x.valorTempFresas
    ); 
      
    console.log(this.dataTempFre);
  });  
  this.GraficaHum = new Chart('gHumedad', {  
    type: 'line', 
    data: {  
     
      labels: 
      this.dataidjito ,
      
        
      datasets: [  
        {  
          label: "HR Exterior",
           data: this.dataHum,
           borderColor: 'green',  
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
            
         } ,
         //////////////////
        {  
          label: "HR Jitomates",
           data: this.data2,
           borderColor: 'darkblue',  
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
            
         } ,
         //////////////////
        {  
          label: "HR Fresas",
           data: this.dataHumFre,
           borderColor: "#800000",  
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
               
               
                display: true, 
                labelString: "Normalized/Indexed Data",
                
                
              }],  
              yAxes: [{  
                display:true 
 
              }],  
            } 
            
          }
            
         } ,
         //////////////////
        {  
         label: "HS Fresas",
          data: this.dataHusFre,
          
          
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
              display: true
               
             }],  
             yAxes: [{  
               display:true 

             }],  
           } 
           
         }
           
        } ,
        //////////////777
        {  
          label: "HS Jitomates",
           data: this.data6,
           borderColor: "#800080",  
           //backgroundColor: "#000FFF", 
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
        ///////////////////777 
      ]  
    }  
     
  }); 
});


}
}
