import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public copy:string="Todos los derechos reservados.";
  public autor:string="Major Tom";
  public anio:Date=new Date();
  public cliente:string="RQ Bauen " + this.anio.getFullYear();

  constructor() {}

  ngOnInit() {
  }

}
