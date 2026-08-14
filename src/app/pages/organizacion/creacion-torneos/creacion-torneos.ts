import { Component, OnInit } from '@angular/core';



interface Torneo {
  Lugar:string;
  premiacion:string;
  tipo_deporte:string;
  divicion:string;
  flayer: File | null;
}


@Component({
  selector: 'app-creacion-torneos',
  imports: [],
  templateUrl: './creacion-torneos.html',
  styleUrl: './creacion-torneos.css',
})
export class CreacionTorneos {

    contador:number=0
  
    sumarcontador():void{
      this.contador=this.contador+1
      console.log(this.contador)
    }
    restarcontador():void{
      if(this.contador>0){
      this.contador=this.contador-1
      console.log(this.contador)
      }
    }
}
