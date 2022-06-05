import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  articulos: any;
  titulo: string = '';

  pages: number = 1;
  loading = true;

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.titulo = 'EducaTolerancia'

    this.dataService.getNoticias().subscribe(res => {
      this.articulos = res;
      this.loading = false;
    });
  }
}
