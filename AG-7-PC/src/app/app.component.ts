import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'h-app';
  constructor(private route: ActivatedRoute ) {

  }
  link = [
    {name: 'g2', link: '/g2'},
    {name: 'map', link: '/map'},
    {name: 'list', link: '/list'},
    { name: 'child', link: '/child' },
    { name: 'form', link: '/form' },
  ]
}
