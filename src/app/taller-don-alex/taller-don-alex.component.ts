import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-taller-don-alex',
  templateUrl: './taller-don-alex.component.html',
  styleUrls: ['./taller-don-alex.component.css']
})
export class TallerDonAlexComponent implements OnInit {
  registros_aux=[];
  registros=[];
  clientes:any;
  nombre:string;
  dui:string;
  vehiculo:string;
  costo_reparacion:number;
  visitas_contadas:number;
  venta:number;

  constructor() { }

  ngOnInit() {
    this.nombre="";
    this.dui="";
    this.costo_reparacion=0;
    this.visitas_contadas=0;
    this.venta=0;
  }

  ingresar(){
if (this.visitas_contadas>=2 || this.visitas_contadas<=4){
this.venta =  this.costo_reparacion- (this.costo_reparacion* 0.05)
}
if (this.visitas_contadas>4){
  this.venta =  this.costo_reparacion- (this.costo_reparacion* 0.10)
}

this.clientes={"nombre":this.nombre, "dui":this.dui, "costo_rep":this.costo_reparacion, "visitas":this.visitas_contadas};
this.registros_aux.push(this.clientes);

  } //Termino de metodo ingresar()



}
