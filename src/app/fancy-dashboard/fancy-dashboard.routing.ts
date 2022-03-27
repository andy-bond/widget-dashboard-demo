import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FancyDashboardComponent } from './fancy-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FancyDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FancyDashboardRoutingModule { }
