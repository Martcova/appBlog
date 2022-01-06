import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-usua',
  templateUrl: './vista-usua.page.html',
  styleUrls: ['./vista-usua.page.scss'],
})
export class VistaUsuaPage {

  usuarios: any;
  textoBuscar: string = '';
  titulo: string = 'Usuarios';

  constructor( private http: HttpClient,
    private alertController: AlertController,
    private navController: NavController,
    private router:Router,
    private dataservice : DataService) { }



    ionViewWillEnter() {
      this.usuarios=null;
      this.http.get('https://blog-control.herokuapp.com/api/view_usuarios').subscribe(
        (res:any) => {
       // console.log(response);
        this.usuarios = res.response;
        console.log(this.usuarios);
      }
      );
     
    }

    onSearchChange(event) {
      this.textoBuscar = event.detail.value;
    }
  

    verUsuario(id:any) {
     // this.router.navigate(['/articulovis',id])
     // this.navController.navigateForward(['/clientes/cuentas/', cliente.id]);
    }

    editarUsuario(id: any){

    }


   async eliminarUsuario(usuario, i) {
                 
   

      const name = `${usuario.name} `;
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Cuidado!',
        mode: 'ios',
        message: `¿Deseas eliminar el usuario? <br><br><strong>${name}</strong>`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: Accion cancelada');
            }
          }, {
            text: 'Confirmar',
            handler: () => {
              console.log('Confirm Okay');
              this.dataservice.deleteUsuario(usuario.id).subscribe(
                (response: any) => {
                  console.log(response);
                 
                  this.usuarios.splice(i,1);
                },
                (error) => {
                  console.log(error);
                }
              );
            }
          }
        ]
      });
  
      await alert.present();
       }


}
