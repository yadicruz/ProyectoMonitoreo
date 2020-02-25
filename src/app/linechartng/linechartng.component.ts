import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';  
import { HttpClient} from '@angular/common/http';  
import { Data } from '../../app/Data';

import { from } from 'rxjs';
@Component({
  selector: 'app-linechartng',
  templateUrl: './linechartng.component.html',
  styleUrls: ['./linechartng.component.css']
})
export class LinechartngComponent implements OnInit {

  url = 'http://localhost/api/graficar/prueba1.php';  
  url2 = 'http://localhost/api/graficar/prueba2.php'; 
  data: Data[];  
  Linechart = []; 
   data1 = [];
   data2 = []; 
  
  constructor(private http: HttpClient) { }  
 
  ngOnInit() {  
  //temperatura
    this.http.get(this.url2).subscribe((result: Data[]) => {  
      result.forEach(y => {  
        this.data2.push(
          y.valory1
        ); 
          
        console.log(this.data2);
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
          labels: this.data1,
            
          datasets: [  
            {  
              label: "Humedad del suelo",
              data: this.data2,
              
              
              borderColor: 'white',  
              backgroundColor: "#0000FF",  
              legend: {  
                display: false ,
                labels: {
                  boxWidth: 90,
                  color: 'red'
                } 
              }
            }  
          ]  
        } 
      }); 
  }); 

 
     

      
 
   

      
    
    
    

 
  
    
  }
} 