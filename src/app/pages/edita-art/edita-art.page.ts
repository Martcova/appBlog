import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloI } from 'src/app/models/articulo.interface';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edita-art',
  templateUrl: './edita-art.page.html',
  styleUrls: ['./edita-art.page.scss'],
})
export class EditaArtPage implements OnInit {

  constructor(private activerouter:ActivatedRoute,
    private router: Router,
    private api: DataService,
    public alertController: AlertController) { }

    datosarticulos : ArticuloI
    articuloid = this.activerouter.snapshot.paramMap.get('id');
    editarFormA= new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl( '', [Validators.required]),
    })

  ngOnInit() {
    this.api.getunArticulo(this.articuloid).subscribe(data =>{
      this.datosarticulos = data ['message'];
      console.log(this.datosarticulos);
      this.editarFormA.setValue({
         'nombre': this.datosarticulos.nombre,
         'descripcion': this.datosarticulos.descripcion,
      })
    })
    
  }


  editar(form:ArticuloI){
    this.api.editarArticulo(form,this.articuloid).subscribe(data =>{
      console.log(data);
     this.alertSuccess();
    },error=>{
       this.alerterror();
    })

  }

  async alertSuccess(){
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Exito',
    backdropDismiss:false,
    mode: 'ios',
    subHeader: 'El articulo se edito correctamente.!',
   
    buttons: [ {
      text: 'Ok',
      role: 'ok',
   
      cssClass: 'secondary',
      handler: (blah) => {
       //  this.vistaArt();
        this.router.navigate(['/vista-art']);
     
        console.log('Confirm ok: Okkk 👌😘');
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
    backdropDismiss:false,
    mode: 'ios',
    subHeader: 'No se pudo editar el articulo',
   
    buttons: [ {
      text: 'Ok',
      role: 'ok',
      cssClass: 'secondary',
      handler: (blah) => {
        console.log('Confirm ok: error');
        this.router.navigate(['/edit-art']);
      
      }
    }]
  })
  alert.then(alert => alert.present());
}




}
