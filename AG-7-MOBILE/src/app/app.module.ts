import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { ChildComponent } from './components/child/child.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';

import { LoginComponent } from './views/login/login.component';
import { ExampleComponent } from './views/example/example.component';
import { RouterLinksComponent } from './views/router-links/router-links.component';
import { ShowChartsComponent } from './views/show-charts/show-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ChildComponent,
    TabbarComponent,
    ShowChartsComponent,
    LineChartComponent,
    LoginComponent,
    RouterLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
