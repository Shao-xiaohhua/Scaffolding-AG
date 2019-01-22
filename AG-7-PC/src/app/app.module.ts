import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { G2Component } from './views/g2/g2.component';
import { MapComponent } from './views/map/map.component';
import { IndexComponent } from './views/index/index.component';
import { ListComponent } from './views/list/list.component';
import { ListdetailComponent } from './components/listdetail/listdetail.component';
import { ChildComponent } from './views/child/child.component';
import { JohnComponent } from './views/john/john.component';
import { HankComponent } from './views/hank/hank.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { LoginComponent } from './views/login/login.component'; // 响应式表单
import { HeroFormComponent } from './components/hero-form/hero-form.component'; // 模板驱动表单

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DemoMaterialModule} from '../mat';


registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    G2Component,
    MapComponent,
    IndexComponent,
    ListComponent,
    ListdetailComponent,
    ChildComponent,
    JohnComponent,
    HankComponent,
    LoginComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    MatButtonModule, 
    MatCheckboxModule,
    DemoMaterialModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
