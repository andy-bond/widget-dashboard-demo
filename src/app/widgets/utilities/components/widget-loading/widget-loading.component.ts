import { Component, ChangeDetectionStrategy, HostBinding, NgModule } from '@angular/core';
import { WidgetBaseComponentModule } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-widget-loading',
  templateUrl: './widget-loading.component.html',
  styleUrls: ['./widget-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetLoadingComponent { }

@NgModule({
  declarations: [WidgetLoadingComponent],
  imports: [WidgetBaseComponentModule],
  exports: [WidgetLoadingComponent]
})
export class WidgetLoadingComponentModule { }
