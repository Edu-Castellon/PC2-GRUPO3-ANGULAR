import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from 'src/app/service/api-service.service'; 

import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  data: any;
  token: any;

  constructor(private dataService: ApiServiceService, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router) { }

  loginForm()
  {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f()
  {
    return this.form.controls;
  }

  submit()
  {
    this.submitted = true;
    if(this.form.invalid)
    {
      return;
    }

    this.dataService.loginUser(this.form.value).subscribe(res => {
      this.data = res;
      //console.log(res);
      if(this.data.status == 1)
      {
        this.token = this.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/dashboard']);
      }
      else if (this.data.status == 0)
      {
        this.toastr.error(JSON.stringify('Error al conectar'), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }
    });
  }

}
