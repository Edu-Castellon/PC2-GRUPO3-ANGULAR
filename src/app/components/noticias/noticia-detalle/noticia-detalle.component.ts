import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/noticia';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.component.html',
  styleUrls: ['./noticia-detalle.component.scss']
})
export class NoticiaDetalleComponent implements OnInit {

  loading = true;

  data: any;
  articulo = new Noticia();

  constructor(private route: ActivatedRoute, private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.getArticuloDetalle();
  }

  getArticuloDetalle(){
    this.dataService.getNoticiasById(this.route.snapshot.params['id_articulo']).subscribe(res =>{
      this.data = res;
      this.articulo = this.data;
      this.loading = false;
    });
  }
}
