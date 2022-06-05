import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './inicio/inicio.component';
import { ColegiosLocalidadComponent } from './colegios-localidad/colegios-localidad.component';
import { ColegiosNombreComponent } from './colegios-nombre/colegios-nombre.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiasDetalleComponent } from './noticias-detalle/noticias-detalle.component';
import { SpinnerComponent } from '../spinner/spinner.component';

// Librerias Externas
import { NgxPaginationModule } from 'ngx-pagination';
import { ColegiosDetalleComponent } from './colegios-detalle/colegios-detalle.component';

@NgModule({
  declarations: [
    InicioComponent,
    ColegiosLocalidadComponent,
    ColegiosNombreComponent,
    NoticiasComponent,
    NoticiasDetalleComponent,
    SpinnerComponent,
    ColegiosDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
