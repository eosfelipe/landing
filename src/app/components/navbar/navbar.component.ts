import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public copy:string="Todos los derechos reservados.";
  public autor:string="Major Tom";
  public anio:any=new Date().getFullYear();
  public cliente:string="Marca";

  public facebook:string = "http://www.facebook.com";
  public instagram:string = "http://www.instagram.com";

  constructor() {}

  ngOnInit() {
  }

}
