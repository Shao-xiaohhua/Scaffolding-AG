import { Component, OnInit } from '@angular/core';
import { IsloginService } from 'src/app/service/islogin.service';
import keyEncrypt from 'public/encrypt/getPassKey.js';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public input: string;
  public password: string;
  public form = {
    name: '',
    pass: ''
  };
  collection;
  crfcode;
  login;
  getcoll = this.isloginService
    .collection()
    .subscribe(data => (this.collection = data));
  getcrfcode = this.isloginService
    .crfcode()
    .subscribe(data => (this.crfcode = data));
  titleFocus = {
    focus: false
  };
  titleFocuspwd = {
    focus: false
  };
  constructor(private isloginService: IsloginService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });
  }
  onSubmit() {
    if (this.form.name && this.form.pass) {
      this.getcoll;
      this.getcrfcode;
      console.log(this.collection.result);
      console.log(this.crfcode.result);
      const pasKey = JSON.stringify(
        keyEncrypt(this.form.pass, this.collection.result)
      );
      console.log(pasKey);
      const url = new HttpParams()
        .set('_csrf', this.crfcode.result)
        .set('username', this.form.name)
        .set('password', pasKey)
        .set('responseType', 'json');
      this.form.pass = pasKey;
      this.isloginService.getLogin(url).subscribe(data => (this.login = data));
    } else {
      alert('请输入账号密码');
    }
  }
  clickTitle() {
    this.titleFocus = {
      focus: true
    };
  }
  clickTitlepwd() {
    this.titleFocuspwd = {
      focus: true
    };
  }
}
