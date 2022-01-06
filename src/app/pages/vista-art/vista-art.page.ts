import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ArticuloI } from '../../models/articulo.interface';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vista-art',
  templateUrl: './vista-art.page.html',
  styleUrls: ['./vista-art.page.scss'],
})
export class VistaArtPage {
  articulos: any;
  textoBuscar: string = '';
  titulo: string = 'Articulos';
  articulox = []

  constructor(private alertController: AlertController,
                private navController: NavController,
                private http:HttpClient,
                private router:Router,
                private dataservice: DataService,
                private cookie: CookieService) { }
                public edit : boolean;
                ionViewWillEnter() {
                  this.articulos=null;
                  this.http.get('https://blog-control.herokuapp.com/api/view_articulos').subscribe(
                    (res:any) => {
                   console.log(res,'dsdsdsdsdds');
                    this.articulos = res.response;
                    console.log(this.articulos);
                  }
                  );
                }
              
                onSearchChange(event) {
                  this.textoBuscar = event.detail.value;
                }

                verArticulo(id:any) {
                  this.router.navigate(['/articulovis',id])
                 // this.navController.navigateForward(['/clientes/cuentas/', cliente.id]);
                }

                agregarArticulos() {
                  this.router.navigate(['/agrega-art']);
                }

                vistaUsuario(){
                  this.router.navigate(['/vista-usua']);
                }

                editarArticulo(id:any) {
                 
                this.router.navigate(['/edita-art',id]);
                }

        
                async eliminarArticulo(articulo, i) {
                  const nombre = `${articulo.nombre} `;
                    const alert = await this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Cuidado!',
                      mode:'ios',
                      message: `¿Deseas eliminar el articulo? <br><br><strong>${nombre}</strong>`,
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
                            this.dataservice.deleteArticulo(articulo.id).subscribe(
                              (response: any) => {
                                console.log(response);
                                //Que borre el elemento del arreglo, y lo hará a partir del elemento i
                                this.articulos.splice(i,1);
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


                  cerrarSesion(){
                    this.dataservice.cerrarSesion().subscribe(
                      (res:any)=>{
                       console.log(res);
                       //eliminar token
                       this.cookie.delete('token');
                       this.cookie.delete('id');
                       this.cookie.delete('rol_id');
                       this.router.navigate(['/login']);
                      }
                    )
                   
                 
                   }

                   hiddenElmentsAdmin(){
                    const rol_id = this.cookie.get('rol_id');
                    const token = this.cookie.check('token');
                
                    if (rol_id == '1' && token==true){
                      
                      return  this.edit = true;
                    }if(rol_id == '2' && token == true){
                      return this.edit = false;
                    
                    }else{
                      return this.edit = false;
                    }
                  }


}
