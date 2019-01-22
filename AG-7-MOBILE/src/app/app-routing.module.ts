import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleComponent } from './views/example/example.component'; // 首页
import { ShowChartsComponent } from './views/show-charts/show-charts.component'; // 图标展示页
import { LoginComponent } from './views/login/login.component'; // 登录页
import { RouterLinksComponent } from './views/router-links/router-links.component'; // 链接展示页

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: ExampleComponent,
    data: {
      title: '首页' // 页面title
    }
    // children: [{}] 子路由
  },
  {
    path: 'showChart',
    component: ShowChartsComponent,
    data: {
      title: '图表'
    }
  },
  {
    path: 'login/:aid',
    component: LoginComponent,
    data: {
      title: '登录加密'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: '登录加密'
    }
  },
  {
    path: 'routerLinks',
    component: RouterLinksComponent,
    data: {
      title: '路由链接'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
