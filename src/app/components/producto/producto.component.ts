import { Component } from "@angular/core";

@Component({
  selector: "productoComponent",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.css"]
})
export class ProductoComponent {
  public titulo: string;

  constructor() {
    this.titulo = "Producto";
  }
}
