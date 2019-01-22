import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {
  @Input() bar: [];
  constructor() { }

  ngOnInit() {
  }

}
