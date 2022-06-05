import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { MustMatch } from 'src/app/confirmed.validator';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  data: any;

  constructor(private formBuilder: FormBuilder, private dataService: ApiServiceService, private toastr: ToastrService) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'repPassword')
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.dataService.registerUser(this.form.value).subscribe(res => {
      this.data = res;
      // console.log(res)
      if (this.data.status == 1) {
        this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }
      else {
        this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        })
      }
      this.submitted = false;
      this.form.get('name')?.reset();
      this.form.get('email')?.reset();
      this.form.get('password')?.reset();
      this.form.get('repPassword')?.reset();
    });
  }
}
