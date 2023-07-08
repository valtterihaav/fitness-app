import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'plot-barplot',
  templateUrl: './plot-barplot.component.html',
  styleUrls: ['./plot-barplot.component.css']
})
export class PlotBarplotComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']; // Mock labels
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }, // Mock data
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }  // Mock data
  ];


  ngOnInit() { }
}
