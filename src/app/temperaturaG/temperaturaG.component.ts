import { Component, OnInit, ɵɵviewQuery } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../../app/Data';
import { Chart } from 'chart.js';
import {Router} from '@angular/router';
import { Dispositivo1ServiceService } from "../services/dispositivo1-service.service";

@Component({
  selector: 'app-temperaturaG',
  templateUrl: './temperaturaG.component.html',
  styleUrls: ['./temperaturaG.component.css']
})
export class TemperaturaGComponent implements OnInit {
 
  data: Data[];
 
  
  urlFID = 'http://localhost/api/graficar/graficaInterior/prueba77.php';  
  urlFTE = 'http://localhost/api/graficar/graficaInterior/prueba8.php'; 
   
  GraficaTempFre = []; 
   dataIdFre = [];
   dataTempFre = []; 
  constructor(private http: HttpClient, private router: Router,
    private crudDispositivouno:Dispositivo1ServiceService, 
    ) {
    
  }
    
  
  ngOnInit() {

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
        labels: "sss", 
        data: {  
         
          labels: 
          this.dataIdFre ,
            
          datasets: [  
            {  
             label: "Temperatura",
              data: this.dataTempFre,
              
              
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
               
            }  
          ]  
        }  
         
      }); 
    });


}}
