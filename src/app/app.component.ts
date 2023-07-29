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
  common_labels: string[] = [];

  setData(data_backend: any) {
    this.dataLineplot = Array(data_backend["weight"]);
    this.dataBarplot = Array(data_backend["all_sports"]);
  }
}
