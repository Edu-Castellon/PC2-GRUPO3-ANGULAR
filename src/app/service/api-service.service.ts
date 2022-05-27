import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  webscraping(){
    return this.httpClient.get('http://127.0.0.1:8000/webscraping/noticias/educatolerancia');
  }

  getNoticias(){
    return this.httpClient.get('http://127.0.0.1:8000/noticias');
  }

  getNoticiasById(id_article: any){
    return this.httpClient.get('http://127.0.0.1:8000/noticias/'+id_article);
  }
}
