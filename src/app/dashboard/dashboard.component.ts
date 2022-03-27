import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WidgetConfiguration, WIDGET_CONFIGURATION } from '../widgets';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  widgets$ = new BehaviorSubject<string[]>([
    'basic'
  ]);
  types = Object.keys(this.widgets);

  constructor(@Inject(WIDGET_CONFIGURATION) private readonly widgets: WidgetConfiguration) { }

  add(type: string) {
    this.widgets$.next([
      ...this.widgets$.value,
      type
    ])
  }
}
