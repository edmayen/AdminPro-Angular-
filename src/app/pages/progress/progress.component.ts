import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() 
  { 

  }

  ngOnInit() 
  {

  }

  /* 
  Forma en que se haria si se quisiera hacer por funcion pero
  en esta ocacion se va a hacer de forma directa en el html
  actualizar(event: number)
  {
    console.log('Evento: ', event);
    this.progreso1 = event;
  } */

}
