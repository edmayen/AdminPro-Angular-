import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef

  //comunicacion padre-hijo
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  //comunicacion hijo-padre
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  

  constructor() 
  { 

  }

  ngOnInit() 
  {

  }

  onChange(newValue: number)
  {
    /* let elementHTML: any = document.getElementsByName('progreso')[0];
    console.log(elementHTML.value);

    console.log(this.txtProgress); */
    
    
    if(newValue >= 100)
    {
      this.progreso = 100;
    }
    else
    if(newValue <= 0)
    {
      this.progreso = 0;
    }
    else
    {
      this.progreso = newValue;
    }
    /* elementHTML.value = this.progreso;  */
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor)
  {
    if(this.progreso >= 100 && valor > 0)
    {
      return;
    }
    if(this.progreso <= 0 && valor < 0)
    {
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
