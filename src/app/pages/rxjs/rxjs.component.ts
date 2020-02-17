import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() 
  { 
    this.subscription = this.regresaObservable().pipe(
      retry(4)
    )
    .subscribe(numero => {
      console.log('Subs: ', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino!')
    });
  }

  ngOnInit() 
  {

  }
  
  ngOnDestroy()
  {
    console.log("La pagina se va a cerrar");
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any>
  {
    let obs: Observable<any> = new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador+=1;

        let salida = {
          valor: contador
        };

        observer.next(salida);
        /* if( contador == 3)
        {
          clearInterval( intervalo );
          observer.complete();
        } */

        /* if( contador == 2)
        {
          //clearInterval( intervalo );
          observer.error('Auxilio!');
        } */
      }, 1000)
    }).pipe(
      map( (resp: any) => {
        return resp.valor;
      }),
      filter((valor, index) => {
        //console.log('Filter: ', valor, index);
        if((valor % 2) == 1)
        {
          //par
          return true;        }
        else
        {
          //impar
          return false;
        }
      })
    )

    return obs;
  }

}
