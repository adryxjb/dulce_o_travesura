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
  styleUrls: ["./productos.component.css"]
})
export class ProductosComponent {
  public titulo: string;
  public nombre: string;
  public precio: number;
  public status: boolean;
  public categoria: string;

  constructor() {
    this.titulo = "Nuestros Productos";
    this.nombre = "Pay de Manzana";
    this.precio = 180;
    this.status = true;
    this.categoria = "Pays";
  }
}
