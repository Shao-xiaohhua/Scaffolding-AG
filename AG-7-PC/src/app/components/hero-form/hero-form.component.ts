import { Component, OnInit } from '@angular/core';
import { FromHero }    from '../../from-hero';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { UniqueAlterEgoValidator } from '../shared/alter-ego.directive';

import keyEncrypt from 'public/encrypt/getPassKey.js';
import { IsloginService } from './../../service/islogin.service';
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  constructor(
    private alterEgoValidator: UniqueAlterEgoValidator,
    private fb: FormBuilder,
    private isloginService: IsloginService
  ) { }
  heroForm: FormGroup;
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  ngOnInit(): void {
    console.log(this.model);
    // 蚂蚁 UI ============================================
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
  model = new FromHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() {
    console.log(123)
    this.submitted = true; 
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  newHero() {
    this.model = new FromHero(42, '', '');
  }
  // 蚂蚁UI ===================================================
  validateForm: FormGroup;
  private collection;
  private crfcode;
  private login;
  private getcoll = this.isloginService.collection().subscribe(data => this.collection = data);
  private getcrfcode = this.isloginService.crfcode().subscribe(data => this.crfcode = data);
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    let val = this.validateForm.value;
    this.getcoll;
    this.getcrfcode;
    let pasKey = JSON.stringify(keyEncrypt(val.password, this.collection.result))
    let url = new HttpParams()
    .set('_csrf', this.crfcode.result)
    .set('username', val.userName)
    .set('password', pasKey)
    .set('responseType', 'json');
    console.log(url)
    console.log(this.validateForm)
    this.validateForm.get('password').setValue(pasKey); // 修改值
    // this.validateForm.value.password.setValue(pasKey);
    this.isloginService.getLogin(url).subscribe(data => this.login = data);
  }
}
