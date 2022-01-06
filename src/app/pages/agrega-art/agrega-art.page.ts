import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agrega-art',
  templateUrl: './agrega-art.page.html',
  styleUrls: ['./agrega-art.page.scss'],
})
export class AgregaArtPage implements OnInit {
  formArt: FormGroup = new FormGroup({});

  constructor(private dataservice: DataService,
    private formBuilder:FormBuilder,
     private cookie:CookieService,  
     private router: Router,
     public alertController: AlertController) { }

  ngOnInit() {
    this.formArt=this.formBuilder.group(
      
      {
      user_id: new FormControl(''),
      nombre: new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-ZÀ-ÿ\u00f1\u00d1 ¿?]*')
      ]),
      descripcion:new FormControl('',[
        Validators.required,
      ]),
    }
    )
    let id = this.cookie.get('id');
    this.formArt.setValue({
    
      'user_id': id,
      'nombre': '',
      'descripcion': ''
    })
  }


  enviarDatosA(){
    this.dataservice.agregaArticulo('https://blog-control.herokuapp.com/api/articulos', 
    this.formArt.value).subscribe(
      data => {
        console.log('articulo agregado',data);
        this.alertSuccess();
      //  this.router.navigate(['/articulos']);
      },
      error => {
        this.alerterror();
        console.log(error);
      }
    )

  }



  alerterror(){
    const alert = this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      backdropDismiss:false,
      mode: 'ios',
      subHeader: 'No se pudo crear el articulo.!',
     
      buttons: [ {
        text: 'Ok',
        role: 'ok',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm ok: error');
          this.router.navigate(['/agrega-art']);
        
        }
      }]
    })
    alert.then(alert => alert.present());
  }



  async alertSuccess(){
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Exito',
    backdropDismiss:false,
    mode: 'ios',
    subHeader: 'Articulo creado correctamente.!',
   
    buttons: [ {
      text: 'Ok',
      role: 'ok',
   
      cssClass: 'secondary',
      handler: (blah) => {
         this.router.navigate(['/vista-art']);
         backdropDismiss: false;
        console.log('Confirm ok: 👌👌👌👌👌😊');
      }
    }]
  })
  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}


}
