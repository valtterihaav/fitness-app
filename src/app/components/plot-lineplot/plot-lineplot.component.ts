import { Component, Output, Input } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'plot-lineplot',
  templateUrl: './plot-lineplot.component.html',
  styleUrls: ['./plot-lineplot.component.css']
})
export class PlotLineplotComponent {

  // chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'My lineplot title'
      }
    }
  };
  lineChartType: ChartType = 'line';

  // to be inputted to the component from the parent
  @Input() lineChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']; // Mock labels
  @Input() lineChartLegend = true;
  @Input() lineChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }, // Mock data
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }  // Mock data
  ];

}
