import { Component } from '@angular/core';
import { ChartType, GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-charts',
  imports: [GoogleChartsModule], //GoogleChartComponent cannot be used here, use GoogleChartsModule instead.
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  title: string = "My Chart";
  myData = [
    ['Java', 1000],
    ['Python', 800],  
    ['C++', 400],
    ['C#', 300],
    ['PHP', 200],
    ['Ruby', 100]
  ];

  chartColumns = ['Language', 'Popularity'];
  myOptions = {
    colors: ['#b0120a', '#ffab91', '#ff7043', '#b28900', '#f9a825'],
    is3D: true
  }
  type = ChartType.PieChart;

}
