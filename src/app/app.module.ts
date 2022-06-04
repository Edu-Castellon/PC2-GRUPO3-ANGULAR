import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ColeLocalidadComponent } from './components/busqueda/cole-localidad/cole-localidad.component';
import { ColeNombreComponent } from './components/busqueda/cole-nombre/cole-nombre.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NoticiaDetalleComponent } from './components/noticias/noticia-detalle/noticia-detalle.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Librerias Externas
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';

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
    path:'noticias', component: NoticiasComponent
  },
  {
    path:'noticias/detalle/:id_articulo', component: NoticiaDetalleComponent
  },
  {
    path:'registrar', component: RegisterComponent
  },
  {
    path:'inicio-sesion', component: LoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
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
    SpinnerComponent,
    NoticiaDetalleComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
