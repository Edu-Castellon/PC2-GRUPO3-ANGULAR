import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colegio } from 'src/app/models/colegio';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-colegios-detalle',
  templateUrl: './colegios-detalle.component.html',
  styleUrls: ['./colegios-detalle.component.scss']
})
export class ColegiosDetalleComponent implements OnInit {

  data:any;
  colegio = new Colegio();

  constructor(private route: ActivatedRoute, private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.getOpiniones()
  }

  getOpiniones(){
    this.dataService.getColegio(this.route.snapshot.params['nombre_colegio']).subscribe(res =>{
      this.data = res;
      this.colegio = this.data;
    });
  }

}
