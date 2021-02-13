import { Component, OnInit } from "@angular/core";
// import { ProductosService } from "../services/producto.service";

@Component({
  selector: "registroComponent",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
  // providers: [ProductosService]
})
export class RegistroComponent implements OnInit {
  public titulo: string;
  public nombre: string;
  public edad: string;
  public email: string;
}
