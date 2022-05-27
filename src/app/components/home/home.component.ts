import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: ApiServiceService) { }

  ngOnInit(): void {
    this.dataService.webscraping().subscribe(
      res => {
      console.log('Webscraping hecho')
    }
    );
  }

}
