import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-articulovis',
  templateUrl: './articulovis.page.html',
  styleUrls: ['./articulovis.page.scss'],
})
export class ArticulovisPage implements OnInit {
articulo: any;
art = []
  constructor(private dataservice: DataService, private activerouter: ActivatedRoute) { }
  articuloid = this.activerouter.snapshot.paramMap.get('id');

  ngOnInit() {
    this.dataservice.getunArticulo(this.articuloid).subscribe((data:any)=>{
      this.articulo = data ['message'];
      this.art.push(this.articulo);
    })

  }

}
