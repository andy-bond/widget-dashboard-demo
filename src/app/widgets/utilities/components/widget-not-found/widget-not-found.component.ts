import { Component, ChangeDetectionStrategy, HostBinding, NgModule } from '@angular/core';
import { WidgetBaseComponentModule } from '../widget-base/widget-base.component';

@Component({
  selector: 'app-widget-not-found',
  templateUrl: './widget-not-found.component.html',
  styleUrls: ['./widget-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetNotFoundComponent {
  @HostBinding('class') hostClass = 'widget fully-center';
}

@NgModule({
  declarations: [WidgetNotFoundComponent],
  imports: [WidgetBaseComponentModule],
  exports: [WidgetNotFoundComponent]
})
export class WidgetNotFoundComponentModule { }
