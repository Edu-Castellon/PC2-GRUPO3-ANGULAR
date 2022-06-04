import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(private dataService: ApiServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dataService.getUserData().subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify('Bienvenido, '+this.data.name), JSON.stringify(this.data.code), {
        timeOut: 2000,
        progressBar: true
      });
    });
  }

}
