import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  @Input() medio = '';
  titulo: string = '';
  categorias = [
    {value: 'ed', nombre: 'Educacion'},
    {value: 'ae', nombre: 'Acoso Escolar'},
    {value: 'do', nombre: 'Delitos de odio'},
    {value: 'dis', nombre: 'Discriminacion'},
    {value: 'diso', nombre: 'Discurso del odio'},
    {value: 'cib', nombre: 'Ciberodio'}
  ];

  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor() { }

  ngOnInit(): void {
    if(this.medio == '20m'){
      this.titulo ='20 Minutos'
    }
    else if(this.medio == 'et'){
      this.titulo = 'EducaTolerancia'
    }
    else if(this.medio == 'van'){
      this.titulo = 'La Vanguardia'
    }
  }

  categoriaSeleccionada(categoria: any){
    //console.log(categoria)
  }
}