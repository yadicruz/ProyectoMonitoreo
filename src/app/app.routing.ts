import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { MonitoreoComponent } from './componentes/monitoreo/monitoreo.component';
import { MonitoreoInExComponent } from "./componentes/monitoreoInEx/monitoreoInEx.component";
import { AboutComponent } from "./componentes/about/about.component";
import { FormularioComponent } from "./componentes/sensores/formulario.component";
import { GraficarComponent } from "./componentes/graficar/graficar.component";
import { HumedadComponent } from "./componentes/humedad/humedad.component";
import { VientoComponent } from "./componentes/viento/viento.component";

import { VerComponent } from './vistas/ver/ver.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { VerHomeComponent } from './vistas/verhome/verhome.component';
//Importar para el registro de sensores
import { ListadoSensorComponent } from './componentes/listadoSensor/listadoSensor.component';
import { FormularioSensorComponent } from './componentes/formularioSensor/formularioSensor.component';
import { VerSensorComponent } from './vistas/verSensor/verSensor.component';

import { ListadoMonitoreoComponent } from './componentes/listadoMonitoreo/listadoMonitoreo.component';

import {RegistrarComponent} from './componentes/registrar/registrar.component';
//Dispositivo 5

import { LinechartngComponent } from './linechartng/linechartng.component';
import { TemperaturaGComponent } from './temperaturaG/temperaturaG.component';
import { SueloGComponent } from './sueloG/sueloG.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'monitoreo',component:MonitoreoComponent},
    {path: 'monitoreoInEx', component: MonitoreoInExComponent},
    {path: 'about', component: AboutComponent},
    {path: 'Formulario', component: FormularioComponent},
    {path: 'graficar', component: GraficarComponent},
    {path: 'humedad', component: HumedadComponent},
    {path: 'viento', component: VientoComponent},
    {path: 'listadoSensor', component: ListadoSensorComponent},
    {path: 'formularioSensor', component: FormularioSensorComponent},
    {path: 'detalles/:id/:tipo', component: VerSensorComponent},
    {path: 'detalles/:id/:tipo', component: VerHomeComponent},
    {path: 'listadoMonitoreo', component: ListadoMonitoreoComponent},
    {path: 'registrar', component: RegistrarComponent},
    {path: 'linechart', component:LinechartngComponent},
    {path: 'temperaturaG', component:TemperaturaGComponent},
    {path: 'sueloG', component:SueloGComponent},
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];



export const appRoutingModule = RouterModule.forRoot(routes);