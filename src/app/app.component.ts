import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataLineplot: ChartDataset[] = [];
  dataBarplot: ChartDataset[] = [];
  setData(data_backend: any) {
    this.resetPlotDatas();
    this.dataLineplot = Array(data_backend[0][0]);
    this.dataBarplot = Array(data_backend[0][1]);
  }

  resetPlotDatas() {
    this.dataLineplot.length = 0;
    this.dataBarplot.length = 0;
  }
}
