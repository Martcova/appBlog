import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  constructor(private ds:DataService, private cookie:CookieService,private router:Router,
    public alertController: AlertController) { }

  ngOnInit() {

    this.formLogin=new FormGroup(
      {
      email: new FormControl('',[
        Validators.required,
        Validators.email

      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100)
      ]),
     
    }
    )



  }


   enviarLogin(){
    const {email, password} = this.formLogin.value
    this.ds.enviarCredenciales(email, password)
    .subscribe(response =>{
      console.log('sesion iniciada correctamente',response);
      const {token} = response;
      const {id} = response;
      const {rol_id} = response;
      this.cookie.set('rol_id',rol_id);
      this.cookie.set('id',id);
      this.cookie.set('token',token,1,'/');
      this.suscribe();
     
    },
      error =>{
      console.log('error al iniciar sesion'); 
      this.alerterror();
 
    })

  }



//redirecionar a la pagina de registro
  vistaArt(){
     this.router.navigate(['/vista-art']);
  }

  async suscribe(){
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Bienvenido',
      backdropDismiss:false,
      mode: 'ios',
      subHeader: 'Sesion iniciada correctamente',
     
      buttons: [ {
        text: 'Ok',
        role: 'ok',
     
        cssClass: 'secondary',
        handler: (blah) => {
           this.vistaArt();
           backdropDismiss: false;
          console.log('Confirm ok: bienvenido');
        }
      }]
    })
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  alerterror(){
    const alert = this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      mode: 'ios',
      backdropDismiss:false,
      subHeader: 'Usuario o contraseña incorrecto',
     
      buttons: [ {
        text: 'Ok',
        role: 'ok',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm ok: error');
          this.router.navigate(['/login']);
        
        }
      }]
    })
    alert.then(alert => alert.present());
  }



}
