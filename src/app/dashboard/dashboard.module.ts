import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { LazyWidgetDirectiveModule, WidgetConfiguration, WIDGET_CONFIGURATION } from '../widgets';

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
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, LazyWidgetDirectiveModule],
  providers: [
    { provide: WIDGET_CONFIGURATION, useValue: DASHBOARD_WIDGETS }
  ],
})
export class DashboardModule { }
