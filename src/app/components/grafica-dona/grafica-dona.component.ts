import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() leyenda: string = '';
  @Input() data: any[];
  @Input() label: any[];
  @Input() type: any;

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = this.type;

  constructor() 
  { 

  }

  ngOnInit() 
  {
    this.doughnutChartLabels = this.label;
    this.doughnutChartData = this.data;
    this.doughnutChartType = this.type;
  }

}
