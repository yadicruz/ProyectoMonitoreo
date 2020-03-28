import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-monitoreo',
  
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'ovalo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/ovalo.svg')
      );
      iconRegistry.addSvgIcon(
        'agregar',
        sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/agregar.svg')
        );
}
   

  ngOnInit() {
    
  }

}
