import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contador'
})
export class ContadorPipe implements PipeTransform {

  // value=0
  // args=fecha futura
   
  transform(value: number,args:string):any{
    let fecha_futura:any = new Date(args).getTime();
    let hoy:any=new Date().getTime();

    let minuto=1000*60;
    let hora=minuto*60;
    let dia=hora*24;
    let anio=dia*365;

    //24*60*60*1000
    value=Math.round((fecha_futura-hoy)/dia);
    return value;

  }

}
