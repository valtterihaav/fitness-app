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
  commonLabels: string[] = [];

  setData(data_backend: any) {
    if ("no_data" in data_backend) {
      return;
    }
    this.dataLineplot = Array(data_backend["weight"]);
    this.dataBarplot = Array(data_backend["all_sports"]);
    this.commonLabels = data_backend["common_label"];
    console.log(this.dataLineplot, this.dataBarplot, this.commonLabels)
  }
}
