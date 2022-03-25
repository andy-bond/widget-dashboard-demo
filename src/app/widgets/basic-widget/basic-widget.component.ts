import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-basic-widget',
  templateUrl: './basic-widget.component.html',
  styleUrls: ['./basic-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicWidgetComponent { }
