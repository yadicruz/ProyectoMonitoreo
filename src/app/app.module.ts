import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatButtonModule,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VerHomeComponent } from './vistas/verhome/verhome.component';
import { FileuploadService } from './services/fileupload.service';

import { fakeBackendProvider } from './_helpers';
import { appRoutingModule } from './app.routing';
import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { MonitoreoComponent } from './componentes/monitoreo/monitoreo.component';
import { MonitoreoInExComponent } from './componentes/monitoreoInEx/monitoreoInEx.component';
import { AboutComponent } from "./componentes/about/about.component";
import { GraficarComponent } from "./componentes/graficar/graficar.component";
import { HumedadComponent } from "./componentes/humedad/humedad.component";
import { VientoComponent } from "./componentes/viento/viento.component";

import { FormsModule } from '@angular/forms';
//import { MyDatePickerModule } from 'mydatepicker';

import { VerComponent } from './vistas/ver/ver.component';
import { MonedaPipe } from './filtros/moneda.pipe';
import { FiltroProductosPipe } from './filtros/filtro-productos.pipe';
import { FormularioComponent } from './componentes/sensores/formulario.component';

import { ProductoServiceService } from './services/producto-service.service';
import * as $ from 'jquery';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
//import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
//IMPORTACIONES DE SENSORES
import { ListadoSensorComponent } from './componentes/listadoSensor/listadoSensor.component';
import { FormularioSensorComponent } from './componentes/formularioSensor/formularioSensor.component';
import { VerSensorComponent } from './vistas/verSensor/verSensor.component';
import { FiltroSensorPipe } from './filtros/filtro-sensor.pipe';
import { ListadoMonitoreoComponent } from './componentes/listadoMonitoreo/listadoMonitoreo.component';

///SERVICIOS
import { Dispositivo1ServiceService } from './services/dispositivo1-service.service';
import { Dispositivo2ServiceService } from './services/dispositivo2-service.service';
import { Dispositivo3ServiceService } from './services/dispositivo3-service.service';
import { Dispositivo4ServiceService } from './services/dispositivo4-service.service';
import { Dispositivo5ServiceService } from './services/dispositivo5-service.service';
import { SensorServiceService } from './services/sensor-service.service';//
import { EstacionServiceService } from './services/estacion-service.service';
import { LogeoServiceService } from './services/logeo-service.service';

import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { Observable } from "rxjs";

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { LinechartngComponent } from './linechartng/linechartng.component';
import { TemperaturaGComponent } from './temperaturaG/temperaturaG.component';
import { SueloGComponent } from './sueloG/sueloG.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {Component} from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      MonitoreoComponent,
      MonitoreoInExComponent,
      AboutComponent,
      GraficarComponent,
      HumedadComponent,
      VientoComponent,
      FormularioComponent,
      MonedaPipe,
      FiltroProductosPipe,
      NoencontradoComponent,
      ListadoSensorComponent,
      FormularioSensorComponent,
      VerSensorComponent,
      FiltroSensorPipe,
      VerComponent,
      VerHomeComponent,
      ListadoMonitoreoComponent,
      RegistrarComponent,
      LinechartngComponent,
      TemperaturaGComponent,
      SueloGComponent,
  ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      ReactiveFormsModule,
      HttpClientModule,
      appRoutingModule,
      FormsModule,
      SlimLoadingBarModule.forRoot(),
      MatTableModule,
      MatInputModule,
      MatProgressSpinnerModule,
     MatButtonToggleModule,
     MatExpansionModule,
      NgCircleProgressModule.forRoot(
         
      ),
      MatTableModule, 
      MatTabsModule,
      MatSlideToggleModule,
  
      
   ],
   entryComponents: [VientoComponent],
 
 
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ProductoServiceService, SensorServiceService,
        Dispositivo1ServiceService, FileuploadService,
        Dispositivo2ServiceService, LogeoServiceService,
        Dispositivo3ServiceService, Dispositivo4ServiceService,
        Dispositivo5ServiceService, EstacionServiceService,
        // provider used to create fake backend
        fakeBackendProvider
    
   ],
   bootstrap: [
      AppComponent,
     
   ]
})
export class AppModule { }
