import { IsloginService } from './../../service/islogin.service';
import { Component, OnInit } from '@angular/core';

import { HttpParams } from "@angular/common/http";

import keyEncrypt from 'public/encrypt/getPassKey.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  private form = {
    name: '',
    pass: ''
  }

  constructor(
    private isloginService: IsloginService
    ) { }

  private collection;
  private crfcode;
  private login;
  private getcoll = this.isloginService.collection().subscribe(data => this.collection = data);
  private getcrfcode = this.isloginService.crfcode().subscribe(data => this.crfcode = data);

  onSubmit() {
    if (this.form.name && this.form.pass) {
      this.getcoll;
      this.getcrfcode;
      console.log(this.collection.result)
      console.log(this.crfcode.result)
      let pasKey = JSON.stringify(keyEncrypt(this.form.pass, this.collection.result))
      console.log(pasKey)
      let url = new HttpParams()
        .set('_csrf', this.crfcode.result)
        .set('username', this.form.name)
        .set('password', pasKey)
        .set('responseType', 'json');
      this.form.pass = pasKey;
      this.isloginService.getLogin(url).subscribe(data => this.login = data);
    } else {
      alert('请输入账号密码')
    }
  }



  ngOnInit() {

  }


}
