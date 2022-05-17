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

const appRoutes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'noticias', component: NoticiasComponent
  },
  {
    path:'busqueda/localizacion', component: ColeLocalidadComponent
  },
  {
    path:'busqueda/cole', component: ColeNombreComponent
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
    ColeNombreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
