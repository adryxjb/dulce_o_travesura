// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   Component
// } from "@angular/core";

import { Component } from "@angular/core";

@Component({
  selector: "productosComponent",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.components.css"]
})
export class ProductosComponent {
  nombre: string;
  precio: number;
  status: boolean;
  categoria: string;

  constructor() {
    this.nombre = "Pay de Manzana";
    this.precio = 180;
    this.status = true;
    this.categoria = "Pays";
  }
}
