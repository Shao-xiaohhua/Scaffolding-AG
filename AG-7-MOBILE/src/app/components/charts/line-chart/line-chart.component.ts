import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import F2 from '@antv/f2/build/f2';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() chartData;
  @Input() idname;
  public chart: any;
  constructor() {}

  ngOnInit() {
    console.log(this.idname);
  }
  ngAfterViewInit() {
    this.chart = new F2.Chart({
      id: this.idname,
      forceFit: true,
      height: document.querySelector('#' + this.idname + '').clientHeight,
      width: document.querySelector('#' + this.idname + '').clientWidth,
      padding: 'auto'
    });
    this.chart.source(this.chartData);
    this.chart.tooltip(false);
    this.chart.legend(false);
    this.chart
      .line()
      .position('date*value')
      .size(2);
    this.chart.point().position('date*value');
    this.chart.render();
  }
  ngOnChanges(changes: SimpleChanges) {
    const data = changes.chartData.currentValue;
    if (this.chart) {
      this.chart.changeData(data);
    }
  }
}
