import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-widget-base',
  templateUrl: './widget-base.component.html',
  styleUrls: ['./widget-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetBaseComponent {
  @Input() header?: string;
}

@NgModule({
  declarations: [WidgetBaseComponent],
  imports: [CommonModule],
  exports: [WidgetBaseComponent]
})
export class WidgetBaseComponentModule { }
