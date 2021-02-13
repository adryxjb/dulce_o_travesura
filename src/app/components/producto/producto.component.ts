import { Component } from "@angular/core";

@Component({
  selector: "productoComponent",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.css"]
})
export class ProductoComponent {
  public titulo: string;
  public nombre: string;
  public precio: string;
  public status: boolean;

  constructor() {
    this.titulo = "Producto";
  }
}
