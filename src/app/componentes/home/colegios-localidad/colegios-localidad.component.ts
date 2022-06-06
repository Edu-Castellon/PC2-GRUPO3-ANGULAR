import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-colegios-localidad',
  templateUrl: './colegios-localidad.component.html',
  styleUrls: ['./colegios-localidad.component.scss']
})
export class ColegiosLocalidadComponent implements OnInit {

  data: any;
  ciudades: any
  ciudad!: string

  provincias: any
  provincia!: string

  nombre: any;

  spinner = false

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.getCiudades()
  }

  getCiudades(){
    this.dataService.getCiudades().subscribe(res =>{
      this.data = res;
      this.ciudades = this.data.ciudades
    })
  }

  buscarProvincias(){
    this.dataService.getProvincias(this.ciudad).subscribe(res =>{
      this.data = res;
      this.provincias = this.data.provincias
    })
  }

  buscarColegios(){
    this.spinner = true
    this.dataService.prueba({ "ciudad": this.ciudad, "provincia": this.provincia }).subscribe(res =>{
      this.data = res
      this.nombre = this.data.colegio
      this.spinner = false
    })
  }

  buscarColegiosProvincias(){
    this.spinner = true
    this.dataService.prueba({ "ciudad": this.ciudad, "provincia": this.provincia }).subscribe(res =>{
      this.data = res
      this.nombre = this.data.colegio
      this.spinner = false
    })

    this.buscarProvincias()
  }
}
