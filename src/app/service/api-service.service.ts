import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { AuthGuard } from '../auth.guard';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient, private authguard: AuthGuard) { }

  webscraping(){
    return this.httpClient.get(environment.apiUrl+'/webscraping/noticias/educatolerancia');
  }

  getNoticias(){
    return this.httpClient.get(environment.apiUrl+'/noticias');
  }

  getNoticiasById(id_article: any){
    return this.httpClient.get(environment.apiUrl+'/noticias/'+id_article);
  }

  registerUser(data: any){
    return this.httpClient.post(environment.apiUrl+'/register',data);
  }

  loginUser(data: any){
    return this.httpClient.post(environment.apiUrl+'/auth/login',data);
  }

  getUserData(){
    return this.httpClient.post(environment.apiUrl+'/auth/me', this.authguard.getToken());
  }

  webscrapingGM(busqueda: any){
    return this.httpClient.post(environment.apiUrl+'/webscraping/colegios/GM', busqueda);
  }

  getColegio(nombre_colegio: any){
    return this.httpClient.get(environment.apiUrl+'/colegios/'+nombre_colegio);
  }
}
