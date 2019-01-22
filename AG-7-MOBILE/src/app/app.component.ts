import { Component, OnInit } from '@angular/core';
import { Router, ChildActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string;
  tabbar = [
    {
      url: 'index',
      title: '首页',
      icon: 'icon-tick',
    },
    {
      url: 'showChart',
      title: '图表',
      icon: 'icon-tick',
    },
    {
      url: 'login',
      title: '登录',
      icon: 'icon-tick',
    },
    {
      url: 'routerLinks',
      title: '链接',
      icon: 'icon-tick',
    }
  ];
  constructor(
    private router: Router,
    private titleService: Title,
  ) {}
  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      if (event instanceof ChildActivationEnd) {
        const thisTitle = event.snapshot.firstChild.data.title;
        this.titleService.setTitle(thisTitle);
        this.title = thisTitle;
      }
    });
  }
}
