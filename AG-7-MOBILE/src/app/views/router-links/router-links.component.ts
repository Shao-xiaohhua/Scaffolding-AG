import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-router-links',
  templateUrl: './router-links.component.html',
  styleUrls: ['./router-links.component.scss']
})
export class RouterLinksComponent implements OnInit {
  public key = { id: '123' };
  public bindImg = '';
  public imgsrc: SafeUrl = 'https://c.staticblitz.com/assets/client/components/SideMenu/blitz_logo-11cebad97cad4b50bc955cf72f532d1b.png';
  files = [
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
    }
  ];
  constructor(private sanit: DomSanitizer) {}

  ngOnInit() {
    console.log(this.key);
  }
  upLoad(e) {
    const file = e.target.files[0];
    const objecturl = window.URL.createObjectURL(file);
    this.imgsrc = this.sanit.bypassSecurityTrustResourceUrl(objecturl);
  }

  fileChange(params) {
    const files = params.files;
    this.files = files;
    console.log(files);
  }
}
