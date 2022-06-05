import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  inicio = true;

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    if (this.inicio) {
      this.dataService.webscraping().subscribe(
        res => {
          console.log('Webscraping hecho')
        }
      );
      this.inicio = false;
    }
  }
}
