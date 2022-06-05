import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-colegios-nombre',
  templateUrl: './colegios-nombre.component.html',
  styleUrls: ['./colegios-nombre.component.scss']
})
export class ColegiosNombreComponent implements OnInit {

  busqueda!: string;
  colegios: any;
  loading = false;

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.loading = true;
    this.dataService.webscrapingGM({ "busqueda": this.busqueda }).subscribe(res => {
      this.colegios = res;
      this.loading = false;
    });
  }
}