import { ChildComponent } from './views/child/child.component';
import { ListComponent } from './views/list/list.component';
import { IndexComponent } from './views/index/index.component';
import { MapComponent } from './views/map/map.component';
import { G2Component } from './views/g2/g2.component';
import { JohnComponent } from './views/john/john.component';
import { HankComponent } from './views/hank/hank.component';
import { LoginComponent } from './views/login/login.component'



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'g2', component: G2Component },
  { path: 'map', component: MapComponent },
  { path: '', component: IndexComponent },
  { path: 'list', component: ListComponent },
  { path: 'form', component: LoginComponent },
  {
    path: 'child', component: ChildComponent, children: [
      { path: 'john', component: JohnComponent },
      { path: 'hank', component: HankComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
