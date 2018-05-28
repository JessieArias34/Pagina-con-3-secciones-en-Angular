import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  nombre: string = "nombre del subscriptor";
  
  mail: string = "correo@usuario.com";
  constructor() { }

  ngOnInit() {
  }

}
