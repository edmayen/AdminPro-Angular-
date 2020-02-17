import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() 
  { 
    
    let promesa = this.contarTres();
    promesa.then(
      mensaje => console.log('Termino!', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error))
  }

  ngOnInit() 
  {

  }

  contarTres(): Promise<boolean>
  {
    let promesa: Promise<boolean> = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( ()=> {
        contador+=1;
        console.log(contador);
        
        if(contador == 3)
        {
          resolve(true);
          //reject('Simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
    return promesa;
  }

}
