import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ColeLocalidadComponent } from './components/busqueda/cole-localidad/cole-localidad.component';
import { ColeNombreComponent } from './components/busqueda/cole-nombre/cole-nombre.component';
import { Minutos20Component } from './components/noticias/minutos20/minutos20.component';
import { EducatoleranciaComponent } from './components/noticias/educatolerancia/educatolerancia.component';
import { ElmundoComponent } from './components/noticias/elmundo/elmundo.component';

// Librerias Externas
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'busqueda/localizacion', component: ColeLocalidadComponent
  },
  {
    path:'busqueda/cole', component: ColeNombreComponent
  },
  {
    path:'20minutos', component: Minutos20Component
  },
  {
    path:'educatolerancia', component: EducatoleranciaComponent
  },
  {
    path:'elmundo', component: ElmundoComponent
  },
  {
    path:'noticias', component: NoticiasComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NoticiasComponent,
    ColeLocalidadComponent,
    ColeNombreComponent,
    Minutos20Component,
    EducatoleranciaComponent,
    ElmundoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
