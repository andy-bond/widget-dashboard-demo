import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { BehaviorSubject } from 'rxjs';
import { WidgetConfiguration, WIDGET_CONFIGURATION } from '../widgets';

interface GridsterItemWithId extends GridsterItem {
  id: number;
}

@Component({
  selector: 'app-fancy-dashboard',
  templateUrl: './fancy-dashboard.component.html',
  styleUrls: ['./fancy-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FancyDashboardComponent {

  widgets$ = new BehaviorSubject<GridsterItemWithId[]>([
    {
      id: 0,
      type: 'basic',
      x: 0,
      y: 0,
      rows: 1,
      cols: 1
    }
  ]);
  types = Object.keys(this.widgets);

  options: GridsterConfig = {
    gridType: GridType.VerticalFixed,
    compactType: CompactType.CompactLeftAndUp,
    displayGrid: DisplayGrid.OnDragAndResize,
    fixedRowHeight: 200,
    margin: 16,
    minCols: 4,
    maxCols: 4,
    maxItemCols: 2,
    maxItemRows: 2,
    mobileBreakpoint: 799,
    draggable: {
      enabled: true,
      ignoreContent: true,
      dragHandleClass: 'widget-header',
    },
    pushItems: true,
    resizable: {
      enabled: true,
    },
  };

  constructor(@Inject(WIDGET_CONFIGURATION) private readonly widgets: WidgetConfiguration) { }

  add(type: string) {
    const ids = this.widgets$.value.map(i => i.id);
    const nextId = Math.max(...ids ?? 0) + 1;
    this.widgets$.next([
      ...this.widgets$.value,
      {
        type,
        id: nextId,
        x: 0,
        y: 0,
        rows: 1,
        cols: 1
      }
    ])
  }

  identify(_: number, item: GridsterItemWithId) {
    return item.id;
  }
}
