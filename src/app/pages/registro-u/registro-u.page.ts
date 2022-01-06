import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.page.html',
  styleUrls: ['./registro-u.page.scss'],
})
export class RegistroUPage implements OnInit {
  formregistro: FormGroup = new FormGroup({});
  constructor(private DataService:DataService,private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formregistro=this.formBuilder.group(
      {
      name: new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')

      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)

      ]),
    }
    )
  }

  enviardatos(){
    this.DataService.post('https://blog-control.herokuapp.com/api/users', 
  this.formregistro.value)
  .subscribe(respuesta => {
    console.log('usuario agregado');
   
  })
  }





   
}
