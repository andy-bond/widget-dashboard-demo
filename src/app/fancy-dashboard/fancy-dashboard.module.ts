import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyWidgetDirectiveModule, WidgetConfiguration, WIDGET_CONFIGURATION } from '../widgets';
import { FancyDashboardComponent } from './fancy-dashboard.component';
import { FancyDashboardRoutingModule } from './fancy-dashboard.routing';
import { GridsterModule } from 'angular-gridster2';

const DASHBOARD_WIDGETS: WidgetConfiguration = {
  basic: {
    id: 'basic',
    import: () => import('../widgets/basic-widget/basic-widget.module').then(m => m.BasicWidgetModule),
  },
  cube: {
    id: 'cube',
    import: () => import('../widgets/cube-widget/cube-widget.module').then(m => m.CubeWidgetModule),
  },
  map: {
    id: 'map',
    import: () => import('../widgets/map-widget/map-widget.module').then(m => m.MapWidgetModule)
  },
}

@NgModule({
  declarations: [FancyDashboardComponent],
  imports: [CommonModule, GridsterModule, FancyDashboardRoutingModule, LazyWidgetDirectiveModule],
  providers: [
    { provide: WIDGET_CONFIGURATION, useValue: DASHBOARD_WIDGETS }
  ],
})
export class FancyDashboardModule { }
