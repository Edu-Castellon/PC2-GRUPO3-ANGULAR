import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  @Input() medio = '';
  
  articulos: any;
  titulo: string = '';

  categorias = [
    { value: 'ed', nombre: 'Educacion' },
    { value: 'ae', nombre: 'Acoso Escolar' },
    { value: 'do', nombre: 'Delitos de odio' },
    { value: 'dis', nombre: 'Discriminacion' },
    { value: 'diso', nombre: 'Discurso del odio' },
    { value: 'cib', nombre: 'Ciberodio' }
  ];

  pages: number = 1;
  loading = true;

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    if (this.medio == '20m') {
      this.titulo = '20 Minutos'
    }
    else if (this.medio == 'et') {
      this.titulo = 'EducaTolerancia'
      
      this.dataService.getNoticias().subscribe(res => {
        this.articulos = res;
        this.loading = false;
      });
    }
    else if (this.medio == 'van') {
      this.titulo = 'La Vanguardia'
    }
  }

  categoriaSeleccionada(categoria: any) {

  }
}