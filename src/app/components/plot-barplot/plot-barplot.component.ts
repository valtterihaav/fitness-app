import { Component, Input } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'plot-barplot',
  templateUrl: './plot-barplot.component.html',
  styleUrls: ['./plot-barplot.component.css']
})
export class PlotBarplotComponent {

  // chart options
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'My barplot title'
      }
    }
  };
  barChartType: ChartType = 'bar';

  // to be inputted to the component from the parent
  @Input() barChartLabels: string[] = []; // Mock labels
  @Input() barChartLegend = true;
  @Input() barChartData: ChartDataset[] = [];


  ngOnInit() { }
}
