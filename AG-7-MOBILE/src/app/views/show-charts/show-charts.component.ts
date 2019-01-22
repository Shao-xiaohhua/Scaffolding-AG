import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-charts',
  templateUrl: './show-charts.component.html',
  styleUrls: ['./show-charts.component.scss']
})
export class ShowChartsComponent implements OnInit {
  public lineData = [
    {
      date: '2017-06-05',
      value: 116
    },
    {
      date: '2017-06-06',
      value: 129
    },
    {
      date: '2017-06-07',
      value: 135
    },
    {
      date: '2017-06-08',
      value: 86
    },
    {
      date: '2017-06-09',
      value: 73
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      console.log(data);
    });
    const that = this;
    setTimeout(function() {
      that.lineData = [
      {
        date: '2017-06-05',
        value: 116
      },
      {
        date: '2017-06-06',
        value: 129
      },
      {
        date: '2017-06-07',
        value: 135
      },
      {
        date: '2017-06-08',
        value: 86
      }];
    }, 3000);
  }
}
