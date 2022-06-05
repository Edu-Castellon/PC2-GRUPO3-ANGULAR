import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

//Componentes
import { HomeComponent } from './componentes/home/home.component';
import { InicioComponent } from './componentes/home/inicio/inicio.component';
import { ColegiosLocalidadComponent } from './componentes/home/colegios-localidad/colegios-localidad.component';
import { ColegiosNombreComponent } from './componentes/home/colegios-nombre/colegios-nombre.component';
import { NoticiasComponent } from './componentes/home/noticias/noticias.component';
import { NoticiasDetalleComponent } from './componentes/home/noticias-detalle/noticias-detalle.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'busqueda/localizacion', component: ColegiosLocalidadComponent },
      { path: 'busqueda/nombre', component: ColegiosNombreComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'noticias/detalle/:id_articulo', component: NoticiasDetalleComponent },
    ]
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: 'inicio-sesion', component: InicioSesionComponent
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule { }
