import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService, 
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer 
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    
    iconRegistry.addSvgIcon(
      'salir',
      sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosAngular/salir.svg')
      );
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);

  }
}
