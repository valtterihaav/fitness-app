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
  labelsLinePlot: string[] = [];
  labelsBarPlot: string[] = [];

  setData(data_backend: any) {
    if ("no_data" in data_backend) {
      return;
    }
    this.dataLineplot = Array(data_backend["weight"]);
    this.labelsLinePlot = data_backend["weight"]["xLabels"];

    this.dataBarplot = Array(data_backend["all_sports"]);
    this.labelsBarPlot = data_backend["all_sports"]["xLabels"];

    console.log(this.dataLineplot, this.dataBarplot, this.labelsLinePlot, this.labelsBarPlot)
  }
}
