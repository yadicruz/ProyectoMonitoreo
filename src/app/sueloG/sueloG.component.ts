import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';  
import { Data } from '../../app/Data';
import { Chart } from 'chart.js'; 
@Component({
  selector: 'app-sueloG',
  templateUrl: './sueloG.component.html',
  styleUrls: ['./sueloG.component.css']
})
export class SueloGComponent implements OnInit {

  url = 'http://localhost/api/graficar/prueba5.php';  
  url2 = 'http://localhost/api/graficar/prueba6.php'; 
  data: Data[];  
  Linechart = []; 
   data5 = [];
   data6 = []; 

   constructor(private http: HttpClient) { }  
 
   ngOnInit() {  
   //temperatura
     this.http.get(this.url).subscribe((result: Data[]) => {  
       result.forEach(y => {  
         this.data5.push(
           y.valorIdSu
         ); 
           
         console.log(this.data5);
       }); 
     });
     //id
     this.http.get(this.url2).subscribe((result: Data[]) => {  
       result.forEach(x => {  
         this.data6.push(
           x.valorSu
         ); 
           
         console.log(this.data6);
       });  
       this.Linechart = new Chart('canvas', {  
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
                
             }  
           ]  
         }  
          
       }); 
   }); 
 
     
   }
 
}
