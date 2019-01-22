import { Component, OnInit } from '@angular/core';

declare var AMap: any;    // 一定要声明AMap，要不然报错找不到AMap

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    this.getMap();
  }
  // 地图要放到函数里。
  getMap() {
    let map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [116.397428, 39.90923]
    });
  }
}
