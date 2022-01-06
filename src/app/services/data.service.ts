import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticuloI } from '../models/articulo.interface';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url :string = "https://blog-control.herokuapp.com/api/"

  constructor(private http: HttpClient) { }

  header = new HttpHeaders()
  .set('Content-Type', 'application/json');
//metodo login
enviarCredenciales(email:string, password:string): Observable<any>{
    const body ={
      email,
      password
    }
  return  this.http.post(`${this.url}login`,body);
  }

   //metodo registro de usuario c:
   public post (url:string, body: any){
    return this.http.post(url, body);
  }


//metodo eliminar articulo

deleteArticulo(id: number) {

  return this.http.delete<any[]>(`${this.url}articulos/${id}`, {headers:this.header});
}

///metodo elimina usuario
deleteUsuario(id: number) {

  return this.http.delete<any[]>(`${this.url}users/${id}`, {headers:this.header});
}





//metodo agregar articulo
public agregaArticulo (url:string, body: any ){
  return this.http.post(url, body);
}

//metodo un articulo

getunArticulo(id):Observable<ArticuloI>{
  let direccion = this.url + "articulos/" + id;
  return this.http.get<ArticuloI>(direccion);
}

//editar articulo
editarArticulo(form:ArticuloI,id:any):Observable<ResponseI>{
  let direccion = this.url + "articulos/" + id;
  return this.http.put<ResponseI>(direccion,form);
  }


  
  public cerrarSesion (){
  
    return this.http.get(this.url+"logout");
  
}

}
